import { FlexRow, Panel, RichTextView, Text } from '@epam/uui';
import { dataMock } from "../../api/dataMock";

export const MainPage = () => {
    return (
        <main>
            <Panel margin="24" shadow style={ { padding: '24px' } } background="surface-main">
                <RichTextView size="14">
                    <h3>Star Wars persons info SPA</h3>
                    {
                        (dataMock as any).results.map((value: any) => (
                            <Panel >
                                <FlexRow >
                                    <Text fontSize="24" >
                                        { value.name }
                                    </Text>
                                </FlexRow>
                            </Panel>
                        ))
                    }
                </RichTextView>
            </Panel>
        </main>
    );
};
