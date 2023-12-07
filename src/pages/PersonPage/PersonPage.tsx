import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useUuiContext } from "@epam/uui-core";
import { SuccessNotification, useForm, Text, FlexRow, Button, IconButton, FlexSpacer, Blocker, ScrollBars } from "@epam/uui";
import { usePerson } from "hooks";
import { Header } from "layout";
import {IPerson, IPersonsRequest} from "types";
import { PersonForm } from "components";
import { ReactComponent as BackIcon } from "@epam/assets/icons/common/navigation-back-24.svg";
import css from "./PersonPage.module.scss";


export const PersonPage = () => {
    const { uuiRouter, uuiNotifications } = useUuiContext();
    const queryClient = useQueryClient();
    const personId = uuiRouter.getCurrentLink().pathname.split("/").filter(v => v !== "").pop();
    const query = usePerson(personId as string);
    const history = useHistory();

    const { lens, save, replaceValue, isChanged } = useForm<IPerson>({
        value: query.data,
        onSave: state => {
            queryClient.setQueryData<IPerson>(
                ["PERSONS", state.url],
                (input) => {
                    return {
                        ...input,
                        ...state,
                    };
                }
            );
            const page = Math.ceil(+(personId as string) / 10);
            const pageData = queryClient.getQueryData(["PERSONS_PAGE", page]);
            if(pageData) {
                queryClient.setQueryData(["PERSONS_PAGE", page], (input) => {
                    return {
                        ...(input as IPersonsRequest),
                        results: [
                            ...(input as IPersonsRequest).results.map(value => {
                                return value.url === state.url ? state : value;
                            })
                        ]
                    };
                });
            }

            return Promise.resolve({ form: state });
        },
        onSuccess: () =>
            uuiNotifications.show((props) => (
                <SuccessNotification { ...props }>
                    <Text>Form saved</Text>
                </SuccessNotification>
            )).catch(() => null),
        getMetadata: () => ({
            props: {},
        }),
    });

    useEffect(() => {
        replaceValue(query.data);
    }, [query.isFetched, query.data, replaceValue]);

    const getTitle = () => (
        <>
            <IconButton cx={ css.backButton } icon={ BackIcon } onClick={ history.goBack } color={ "secondary" } caption='Back' />
            { query.data?.name }
        </>
    );

    return (
        <div className={ css.wrapper }>
            {query.data && <div className={css.content}>
                <Header title={getTitle()}/>
                <ScrollBars>
                    <div className={"container"}>
                        <PersonForm lens={lens}/>
                    </div>
                </ScrollBars>
                <div className={ css.footerShadow }>
                    <div className={"container"}>
                        <FlexRow vPadding='24'>
                            <FlexSpacer/>
                            <Button isDisabled={!isChanged} caption='Save' onClick={save}/>
                        </FlexRow>
                    </div>
                </div>
            </div>}
            <Blocker isEnabled={ query.isFetching || query.isLoading } />
        </div>
    );
};