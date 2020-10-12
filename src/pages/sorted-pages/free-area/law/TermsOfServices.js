import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import H1 from '../../../components/elements/title/H1';
import H2 from '../../../components/elements/title/H2';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class TermsOfServices extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    customHeadElement() {
        return (
            <Helmet>
                <title>Conditions Générales d'Utilisation - Asking Franklin</title>
                <meta name="description" content="Conditions Générales d'Utilisation - Asking Franklin, l’outil qui vous permet de découvrir les questions et mots clés liés aux requêtes Google des internautes."/>
            </Helmet>
        );
    }

    render() {

        const siteURL = <Link to="/">www.askingfranklin.com</Link>;
        const contactEmail = <a href="mailto:contact@askingfranklin.com">contact@askingfranklin.com</a>;

        const article1 = 'Article 1 : Les mentions légales';
        const article2 = 'Article 2 : Accès au site';
        const article3 = 'Article 3 : Collecte des données';
        const article4 = 'Article 4 : Propriété intellectuelle';
        const article5 = 'Article 5 : Responsabilité';
        const article6 = 'Article 6 : Liens hypertextes';
        const article7 = 'Article 7 : Cookies';
        const article8 = 'Article 8 : Droit applicable et juridiction compétente';

        return (
            <div class="layout-style">
                {this.customHeadElement()}
                <Container className="px-0 mt-6">

                    <H1 className="mb-4" title="Conditions Générales d'Utilisation"/>
                    <p class="mb-5">En vigueur depuis le 06/08/2020</p>

                    {/* --- Préabule --- */}
                    <section>
                        <H2 className="mb-3" title="Préambule"/>
                        <p class="mb-3">Les présentes Conditions Générales d'Utilisation (dites « CGU ») ont pour objet l'encadrement juridique des modalités de mise à disposition du site et des services par Sortvoices et de définir les conditions d’accès et d’utilisation des services par « l'Utilisateur ».</p>
                        <p class="mb-3">Les présentes CGU sont accessibles sur le site à la rubrique « CGU »</p>
                        <p class="mb-3">Toute inscription ou utilisation du site implique l'acceptation sans aucune réserve ni restriction des présentes CGU par l’utilisateur. Lors de l'inscription sur le site via le Formulaire d’inscription, chaque utilisateur accepte expressément les présentes CGU en cochant la case précédant le texte suivant : « J'ai lu et j'accepte les CGU ».</p>
                        <p class="mb-3">En cas de non-acceptation des CGU stipulées dans le présent contrat, l'Utilisateur se doit de renoncer à l'accès des services proposés par le site</p>
                        <p>{siteURL} se réserve le droit de modifier unilatéralement et à tout moment le contenu des présentes CGU.</p>
                    </section>

                    <p class="fz-24 mt-5 mb-4">Sommaire :</p>
                    <ul>
                        <li class="mb-3"><AnchorLink href="#article-1">{article1}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-2">{article2}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-3">{article3}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-4">{article4}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-5">{article5}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-6">{article6}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-7">{article7}</AnchorLink></li>
                        <li><AnchorLink href="#article-8">{article8}</AnchorLink></li>
                    </ul>

                    {/* --- Article 1 --- */}
                    <section>
                        <H2 id="article-1" className="pt-6 mb-3" title={article1}/>
                        <p class="mb-3">L'édition du site {siteURL} est assurée par la Société SAS Sortvoices au capital de 1000 euros, immatriculée au RCS de Bordeaux sous le numéro 835152620, dont le siège social est situé au 75 avenue du 11 Novembre 33290 Blanquefort.</p>
                        <p class="mb-3">Adresse email : {contactEmail}</p>
                        <p class="mb-3">Le Directeur de la publication est : Romain Cernik</p>
                        <p class="mb-3">Numéro de TVA intracommunautaire : FR58835152620</p>
                        <p>L'hébergeur du site {siteURL} est la société Amazon Web Services LLC, dont le siège social est situé au P.O. Box 81226 Seattle, WA 98108-1226.</p>
                    </section>
                
                    {/* --- Article 2 --- */}
                    <section>
                        <H2 id="article-2" className="pt-6 mb-3" title={article2}/>
                        <p>Le site {siteURL} permet à l'Utilisateur un accès gratuit aux services suivants :</p>
                        <ul class="ml-3 ml-md-5 mt-5">
                            <li class="mb-3"><span class="mr-2">&bull;</span> SaaS d'optimisation SEO</li>
                            <li class="mb-3"><span class="mr-2">&bull;</span> Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.</li>
                            <li class="mb-3"><span class="mr-2">&bull;</span> L’Utilisateur non membre n'a pas accès aux services réservés. Pour cela, il doit s’inscrire en remplissant le formulaire et en validant son paiement. En acceptant de s’inscrire aux services réservés, l’Utilisateur membre s’engage à fournir des informations sincères et exactes concernant son état civil et ses coordonnées, notamment son adresse email.</li>
                            <li class="mb-3"><span class="mr-2">&bull;</span> Pour accéder aux services, l’Utilisateur doit ensuite s'identifier à l'aide de son identifiant et de son mot de passe qui lui seront communiqués après son inscription.</li>
                            <li><span class="mr-2">&bull;</span> Tout événement dû à un cas de force majeure ayant pour conséquence un dysfonctionnement du site ou serveur et sous réserve de toute interruption ou modification en cas de maintenance, n'engage pas la responsabilité de {siteURL}. Dans ces cas, l’Utilisateur accepte ainsi ne pas tenir rigueur à l’éditeur de toute interruption ou suspension de service, même sans préavis.</li>
                            <li><span class="mr-2">&bull;</span> L'Utilisateur a la possibilité de contacter le site par messagerie électronique à l’adresse email de l’éditeur communiqué à l'article 1.</li>
                        </ul>
                    </section>

                    {/* --- Article 3 --- */}
                    <section>
                        <H2 id="article-3" className="pt-6 mb-3" title={article3}/>
                        <p class="mb-3">Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.</p>
                        <p>En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur exerce ce droit par email à l'adresse email {contactEmail}.</p>
                    </section>

                    {/* --- Article 4 --- */}
                    <section>
                        <H2 id="article-4" className="pt-6 mb-3" title={article4}/>
                        <p class="mb-3">Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son...) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.</p>
                        <p class="mb-3">La marque Asking Franklin est une marque déposée par Sortvoices. Toute représentation et/ou reproduction et/ou exploitation partielle ou totale de cette marque, de quelque nature que ce soit, est totalement prohibée.</p>
                        <p class="mb-3">L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite.</p>
                        <p class="mb-3">Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation expresse de l’exploitant du site Internet constituerait une contrefaçon sanctionnée par l’article L 335-2 et suivants du Code de la propriété intellectuelle.</p>
                        <p>Il est rappelé conformément à l’article L122-5 du Code de propriété intellectuelle que l’Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l’auteur et sa source.</p>
                    </section>

                    {/* --- Article 5 --- */}
                    <section>
                        <H2 id="article-5" className="pt-6 mb-3" title={article5}/>
                        <p class="mb-3">Les sources des informations diffusées sur le site {siteURL} sont réputées fiables mais le site ne garantit pasqu’il soit exempt de défauts, d’erreurs ou d’omissions.</p>
                        <p class="mb-3">Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, le site {siteURL} ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication. De même, le site ne peut être tenue responsable de l’utilisation et de l’interprétation de l’information contenue dans ce site.</p>
                        <p class="mb-3">L'Utilisateur s'assure de garder son mot de passe secret. Toute divulgation du mot de passe, quelle que soit sa forme, est interdite. Il assume les risques liés à l'utilisation de son identifiant et mot de passe. Le site décline toute responsabilité.</p>
                        <p class="mb-3">Le site {siteURL} ne peut être tenu pour responsable d’éventuels virus qui pourraient infecter l’ordinateur ou tout matériel informatique de l’Internaute, suite à une utilisation, à l’accès, ou au téléchargement provenant de ce site.</p>
                        <p>La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers.</p>
                    </section>

                    {/* --- Article 6 --- */}
                    <section>
                        <H2 id="article-6" className="pt-6 mb-3" title={article6}/>
                        <p>Des liens hypertextes peuvent être présents sur le site. L’Utilisateur est informé qu’en cliquant sur ces liens, il sortira du site {siteURL}. Ce dernier n’a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.</p>
                    </section>

                    {/* --- Article 7 --- */}
                    <section>
                        <H2 id="article-7" className="pt-6 mb-3" title={article7}/>
                        <p class="mb-3">L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de navigation.</p>
                        <p class="mb-3">Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l’ordinateur de l’Utilisateur par votre navigateur et qui sont nécessaires à l’utilisation du site {siteURL}. Les cookies ne contiennent pas d’information personnelle et ne peuvent pas être utilisés pour identifier quelqu’un. Un cookie contient un identifiant unique, généré aléatoirement et donc anonyme. Certains cookies expirent à la fin de la visite de l’Utilisateur, d’autres restent.</p>
                        <p class="mb-3">L’information contenue dans les cookies est utilisée pour améliorer le site {siteURL}.</p>
                        <p class="mb-3">En naviguant sur le site, L’Utilisateur les acceptent.</p>
                        <p class="mb-3">L’Utilisateur doit toutefois donner son consentement quant à l’utilisation de certains cookies.</p>
                        <p class="mb-3">A défaut d’acceptation, l’Utilisateur est informé que certaines fonctionnalités ou pages risquent de lui être refusées.</p>
                        <p>L’Utilisateur pourra désactiver ces cookies par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation.</p>
                    </section>

                    {/* --- Article 8 --- */}
                    <section>
                        <H2 id="article-8" className="pt-6 mb-3" title={article8}/>
                        <p class="mb-3">La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître.</p>
                        <p>Pour toute question relative à l’application des présentes CGU, vous pouvez joindre l’éditeur aux coordonnées inscrites à l'article 1.</p>
                    </section>

                </Container>
            </div>
        )
    }
}