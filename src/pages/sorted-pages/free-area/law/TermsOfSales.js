import React from 'react';
import { Container } from 'react-bootstrap';
import H1 from '../../../components/elements/title/H1';
import H2 from '../../../components/elements/title/H2';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class TermsOfSales extends React.Component {

    render() {
        return (
            <Container className="px-0 pt-5 mt-5">
                <H1 className="mb-5" title="Conditions Générales de Vente"/>
                <p class="fz-24 mb-4">Sommaire :</p>
                <ul>
                    <li class="mb-3"><AnchorLink href="#article-1">Article 1 - Objet</AnchorLink></li>
                    <li class="mb-3"><AnchorLink href="#article-2">Article 2 - Acceptation</AnchorLink></li>
                    <li class="mb-3"><AnchorLink href="#article-3">Article 3 - Définitions</AnchorLink></li>
                    <li class="mb-3"><AnchorLink href="#article-4">Article 4 - Description</AnchorLink></li>
                    <li class="mb-3"><AnchorLink href="#article-5">Article 5 - Accès</AnchorLink></li>
                    <li class="mb-3"><AnchorLink href="#article-6">Article 6 - Fonctionnement</AnchorLink></li>
                </ul>

                {/* --- Article 1 --- */}
                <H2 id="article-1" className="pt-6 mb-3" title="Article 1 - Objet"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et lectus condimentum, vehicula nunc sed, facilisis odio. Nulla cursus ullamcorper nisi. Mauris id suscipit nisi, in venenatis turpis. Praesent tellus elit, blandit non sapien quis, euismod vulputate purus. Nullam lorem justo, rhoncus nec finibus at, cursus ut quam. Integer venenatis, dolor id ultrices tempor, quam metus sagittis ligula, eget rutrum leo dolor sed lorem. Aenean at efficitur ex, sit amet bibendum risus.</p>
               
                {/* --- Article 2 --- */}
                <H2 id="article-2" className="pt-6 mb-3" title="Article 2 - Acceptation"/>
                <p>Fusce at molestie ante, id fermentum felis. Proin volutpat ultricies nisl a bibendum. Sed facilisis odio non blandit venenatis. Quisque in dapibus turpis. Fusce molestie vestibulum ligula, non tincidunt lacus. Nunc pellentesque felis sed est vehicula, vel dignissim metus bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla pellentesque, quam mattis euismod scelerisque, odio ipsum consectetur diam, interdum pellentesque velit risus nec magna. Fusce porttitor pulvinar lacus. Quisque consequat placerat est, vitae rhoncus nisl iaculis aliquam. Quisque ut consequat turpis. Ut nec magna vulputate, rutrum enim vitae, efficitur odio. Sed tellus dui, tincidunt sed velit eget, aliquet bibendum sem. Aenean venenatis odio at sapien sagittis, a placerat dolor pretium. Aliquam ultricies lectus sed libero gravida, ut malesuada augue commodo.</p>

                {/* --- Article 3 --- */}
                <H2 id="article-3" className="pt-6 mb-3" title="Article 3 - Définitions"/>
                <p>Curabitur ut diam nisl. Etiam varius nisl vitae leo laoreet suscipit. Cras posuere blandit dictum. Nullam sed dignissim justo, non rhoncus turpis. Praesent hendrerit facilisis velit in tempor. Nam a felis at turpis dictum semper sed vitae ligula. Vestibulum commodo arcu eget ex sodales cursus. Duis maximus ac ipsum eu efficitur. Donec a ex in metus luctus varius maximus nec justo. Nullam consequat consequat justo et placerat.</p>

                {/* --- Article 4 --- */}
                <H2 id="article-4" className="pt-6 mb-3" title="Article 4 - Description"/>
                <p>Sed metus massa, pretium sed risus ut, tincidunt vulputate felis. Nunc nunc enim, elementum in cursus sed, dignissim ac magna. Quisque quis nulla volutpat, tristique sem in, posuere tortor. Curabitur at metus ut ipsum venenatis tincidunt sit amet eget orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vitae viverra elit. Ut ultrices diam nunc, ut pharetra neque hendrerit id. Curabitur eu eros id ante mollis pellentesque. Donec et commodo neque. Nunc dictum lectus dictum sem cursus, ac dapibus arcu malesuada. Duis dictum tempor mauris, viverra porttitor mauris. Etiam scelerisque, nisi lacinia consectetur euismod, ipsum justo rhoncus purus, vitae pellentesque augue nibh quis neque. Cras eleifend felis at diam vestibulum elementum. Phasellus imperdiet, libero at tincidunt vulputate, quam lorem suscipit ex, sed faucibus nunc justo nec quam. Curabitur non dignissim leo, ut accumsan massa.</p>

                {/* --- Article 5 --- */}
                <H2 id="article-5" className="pt-6 mb-3" title="Article 5 - Accès"/>
                <p>Vivamus ultricies vestibulum massa sed congue. Suspendisse id metus ex. Nunc suscipit sapien justo, auctor bibendum purus laoreet ac. Praesent auctor lorem vel lectus tincidunt facilisis. Mauris efficitur arcu in libero luctus ultrices. Duis ut dui imperdiet sapien tincidunt malesuada et vitae felis. Vivamus eget nibh tellus. Etiam vel sapien sit amet neque luctus consequat. Sed pulvinar lorem dignissim cursus feugiat. Maecenas at elementum tortor. Duis varius tellus vitae erat eleifend, maximus ornare lectus scelerisque. Ut in suscipit orci. Cras magna erat, laoreet id tincidunt vel, aliquet sed nisl. Etiam vestibulum eros magna, a viverra est commodo vitae.</p>
                
                {/* --- Article 6 --- */}
                <H2 id="article-6" className="pt-6 mb-3" title="Article 6 - Fonctionnement"/>
                <p>Nullam id nibh porttitor dolor ultrices semper non quis magna. Nulla dapibus risus tempor nisl scelerisque, vitae tempor nulla dictum. Duis lectus sapien, faucibus ut iaculis sit amet, tristique nec quam. Nullam eu placerat magna, eu posuere magna. Sed faucibus mi libero, at egestas diam eleifend sed. Ut a mattis urna, quis lobortis purus. Fusce hendrerit auctor leo, vitae condimentum leo laoreet eget. Etiam elementum sit amet erat cursus condimentum. Nunc tincidunt orci id est tincidunt fringilla. Vivamus efficitur at mauris non eleifend.</p>
            </Container>
        )
    }
}