import {
    MixingPayemntSection,
    CenterEmbeds,
    EmbedSection,
    Embed,
    EmbedTitle,
    EmbedDescription,
    EmbedPrice
} from './styles';

export const MixingPaymentComponent = () => {

    return (
        <MixingPayemntSection>
            <CenterEmbeds>
                <EmbedSection>
                    <Embed>
                        <EmbedTitle>MIXING ENGINEER</EmbedTitle>
                        {/* <EmbedDescription>This is just a small example of a description just so I can see the size of a full embed etc etc </EmbedDescription> */}
                        <EmbedPrice>$350</EmbedPrice>
                    </Embed>
                </EmbedSection>
                <EmbedSection>
                    <Embed>
                        <EmbedTitle>MASTERING ENGINEER</EmbedTitle>
                        {/* <EmbedDescription>This is just a small example of a description just so I can see the size of a full embed etc etc </EmbedDescription> */}
                        <EmbedPrice>$100</EmbedPrice>
                    </Embed>
                </EmbedSection>
            </CenterEmbeds>
        </MixingPayemntSection>
    )
}