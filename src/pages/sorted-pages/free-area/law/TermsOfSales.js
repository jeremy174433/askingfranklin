import React from 'react';
import { Container } from 'react-bootstrap';
import H1 from '../../../components/elements/title/H1';
import H2 from '../../../components/elements/title/H2';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class TermsOfSales extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        const siteURL = <Link to="/">www.askingfranklin.com</Link>;
        const contactEmail = <a href="mailto:contact@askingfranklin.com">contact@askingfranklin.com</a>;

        const article1 = 'Article 1 : Définitions';
        const article2 = 'Article 2 : Abonnement';
        const article3 = 'Article 3 : Signature électronique';
        const article4 = 'Article 4 : Confirmation de commande';
        const article5 = 'Article 5 : Durée de l’offre et résiliation';
        const article6 = 'Article 6 : Prix';
        const article7 = 'Article 7 : Mode de paiement';
        const article8 = 'Article 8 : Accès aux services';
        const article9 = 'Article 9 : Droit de propriété intellectuelle';
        const article10 = 'Article 10 : Loi applicable';
        const article11 = 'Article 11 : Protection des données & RGPD';
        const article12 = 'Article 12 : Collecte de données personnelles';

        return (
            <div class="layout-style">
                <Container className="px-0 mt-6">

                    <H1 className="mb-4" title="Conditions Générales de Vente"/>
                    <p class="mb-5">Date de dernière mise à jour des CGV : 06/08/2020</p>

                    {/* --- Préabule --- */}
                    <section>
                        <H2 className="mb-3" title="Préambule"/>
                        <p class="mb-3">Les présentes Conditions Générales de Vente s’appliquent à toutes les ventes conclues sur le site internet {siteURL}.</p>
                        <p class="mb-3">Le site internet {siteURL} est un service édité par la SAS Sortvoices et commercialise des Abonnements à son logiciel SaaS (Software as a Service / Logiciel en tant que service) d’optimisation SEO.</p>
                        <p>Le client déclare avoir pris connaissance et avoir accepté les conditions générales de vente antérieurement à la passation de sa Commande, la validation de la Commande vaut donc acceptation des Conditions Générales de Vente.</p>
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
                        <li class="mb-3"><AnchorLink href="#article-8">{article8}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-9">{article9}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-10">{article10}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-11">{article11}</AnchorLink></li>
                        <li><AnchorLink href="#article-12">{article12}</AnchorLink></li>
                    </ul>

                    {/* --- Article 1 --- */}
                    <section>
                        <H2 id="article-1" className="pt-6 mb-3" title={article1}/>
                        <p>
                            Le terme « Prestataire » désigne la SAS Sortvoices. <br/>
                            Le terme « Client » désigne l’utilisateur qui accède aux services payants de tout ou partie des services développés par la SAS Sortvoicessur le site {siteURL}. <br/>
                            Le terme « Abonnement » désigne le fait, pour un Client, de s’abonner aux services proposés sur le site {siteURL}. <br/>
                            Le terme « Commande » désigne le fait qu’un Client adhère aux services proposés. <br/>
                            Le terme « Offre » désigne les solutions et services développés par la SAS Sortvoices. <br/>
                            Le terme « Contrat » désigne la relation existante entre le Prestataire et le Client dès lors que ce dernier ait passé Commande.
                        </p>
                    </section>
                
                    {/* --- Article 2 --- */}
                    <section>
                        <H2 id="article-2" className="pt-6 mb-3" title={article2}/>
                        <p>
                            Le Client passe sa Commande en ligne au moyen du formulaire qui figure sur le site. <br/>
                            Pour que l’Abonnement soit validé, le Client devra accepter, en cliquant à l’endroit indiqué sur le site, les présentes Conditions Générales de Vente. <br/>
                            Son acceptation entrainera l’envoi d’un mail de confirmation d’Abonnement dela part du Prestataire. <br/>
                            Tout Abonnement vaut acceptation du prix et descriptions des offres. <br/>
                            Le paiement se fait par carte bancaire, l’Abonnement sera prélevé chaque mois ou chaque année, selon l’Offre, conformément aux présentes Conditions Générales de Vente. <br/>
                            L’Abonnement est conclu pour un mois ou douze mois au minimum selon l’offre choisie. <br/>
                            Pour toute question relative à son Abonnement, le Client peut envoyer un mail sur {contactEmail}.
                        </p>
                    </section>

                    {/* --- Article 3 --- */}
                    <section>
                        <H2 id="article-3" className="pt-6 mb-3" title={article3}/>
                        <p>
                            La fourniture en ligne des numéros de carte bancaire du Client et la validation finale de la Commande vaudront preuve de l’accord du Client. <br/>
                            Cela permettra au Prestataire d’obtenir l’exigibilité des sommes dues au titre de l’Abonnement et cela vaudra signature et acceptation expresse de toutes les opérations effectuées.
                        </p>
                    </section>

                    {/* --- Article 4 --- */}
                    <section>
                        <H2 id="article-4" className="pt-6 mb-3" title={article4}/>
                        <p>Les informations contractuelles feront l’objet d’une confirmation par voie d’email, à l’adressee-mail indiquée par l’acheteur dans le formulaire de Commande.</p>
                    </section>

                    {/* --- Article 5 --- */}
                    <section>
                        <H2 id="article-5" className="pt-6 mb-3" title={article5}/>
                        <p>
                            L'offre est régie par les présentes conditions générales de vente. L'Abonnement est mensuel pour l’offre mensuelle ou annuel pour l’offre annuelle et fait l'objet d'une tacite reconduction. Le Client peut, par l’envoi d’un e-mail sur {contactEmail}, demander à résilier son Abonnement. <br/>
                            La résiliation prendra effet au terme du mois en cours ou des douze mois. <br/>
                            Tout mois commencé est dû en intégralité. <br/>
                            En cas de résiliation de l'Abonnement, Sortvoices s'engage soit à effacer et supprimer de son système les données appartenant au Client, soit à restituer les données au format fichier texte, par envoi d’e-mail sous 15 jours ouvrés, en fonction de la demande du Client. Dans l'hypothèse où aucune demande expresse du Client n'est formulée à la date de la résiliation, Sortvoices s'engage à effacer les données à l'expiration d'une période de 15 jours à compter decette date.
                        </p>
                    </section>

                    {/* --- Article 6 --- */}
                    <section>
                        <H2 id="article-6" className="pt-6 mb-3" title={article6}/>
                        <p>
                            Les prix sont fixés par les présentes Conditions Générales de Vente. <br/>
                            Si le Client souscrit l’offre mensuelle, l’Abonnement lui sera facturé 49€ par mois et sera prélevé chaque mois, par tacite reconduction. <br/>
                            Si le Client souscrit l’offre annuelle, l’Abonnement lui sera facturé 39€ par mois et sera payé en une fois par carte bancaire, soit 468€, lors de la Commande. Il sera ensuite prélevé chaque année par tacite reconduction. <br/>
                            Le montant de l’Abonnement s'entend hors taxes, telles que ces taxes sont fixées à la date de l'acceptation de l'Offre par l'Adhérent. <br/>
                            Le Prestataire se réserve le droit de modifier ses prix à tout moment mais s’engage à appliquer les tarifs en vigueur indiqués au moment de la Commande. <br/>
                            Si une ou plusieurs taxes ou contributions venaient à être créées ou modifiées, en hausse comme en baisse, ce changement pourra être répercuté sur le prix de vente des produits.
                        </p>
                    </section>

                    {/* --- Article 7 --- */}
                    <section>
                        <H2 id="article-7" className="pt-6 mb-3" title={article7}/>
                        <p>
                            Il s’agit d’une Commande avec obligation de paiement, ce qui signifie que la passation de Commande implique un règlement de l’acheteur. <br/>
                            Le règlement de la Commande se fait exclusivement par carte bancaire. Le Client doit rentrer ses codes de carte bancaire à l’endroit prévu et confirmer cette saisie par un clic sur le bouton de validation de paiement. <br/>
                            Le Prestataire se réserve le droit de suspendre tout Abonnement en cas de refus d’autorisation de paiement de la part des organismes officiellement accrédités ou en cas de non-paiement.
                        </p>
                    </section>

                    {/* --- Article 8 --- */}
                    <section>
                        <H2 id="article-8" className="pt-6 mb-3" title={article8}/>
                        <p>
                            Sortvoices s’engage à rendre disponible le service proposé, mais ne pourra être rendue responsable des éventuels dommages subis par l'adhérent suite à l'indisponibilité des services. <br/>
                            Le Client peut accéder au service en se connectant, avec ses identifiants, sur le site {siteURL}. <br/>
                            Ces identifiants sont strictement personnels et confidentiels, ils ne peuvent en aucun cas être communiqués à un tiers. Le Client est seul responsable de l’utilisation de ses identifiants. <br/>
                            Le Prestataire se réserve le droit de procéder à la fermeture immédiate du compte du Client si ce dernier venait à faire une utilisation frauduleuse de ses identifiants. <br/>
                            En cas de difficulté pour accéder aux services, le Client peut contacter Sortvoices sur l’adresse e-mail {contactEmail}. 
                        </p>
                    </section>

                    {/* --- Article 9 --- */}
                    <section>
                        <H2 id="article-9" className="pt-6 mb-3" title={article9}/>
                        <p>L’Offre est mise à la disposition du Client sous forme d'Abonnement, cet Abonnement ne confère au Client qu'un seul droit d'usage privé personnel.</p>
                    </section>

                    {/* --- Article 10 --- */}
                    <section>
                        <H2 id="article-10" className="pt-6 mb-3" title={article10}/>
                        <p>
                            Les présentes conditions sont soumises à l’application du droit français. <br/>
                            Les parties s’engagent à rechercher une solution amiable à tout différend qui pourrait naitre de l’interprétation ou de l’exécution du Contrat. Si elles n’y parviennent pas, les parties soumettront le litige au tribunal de commerce de Bordeaux (Gironde).
                        </p>
                    </section>

                    {/* --- Article 11 --- */}
                    <section>
                        <H2 id="article-11" className="pt-6 mb-3" title={article11}/>
                        <p class="mb-3">Le Prestataire s'engage à respecter l'ensemble des dispositions qui lui sont applicables au titre de la réglementation relative à la protection des données à caractère personnel, notamment les dispositions de la loi n° 78-17 modifiée relative à l'informatique, aux fichiers et aux libertés etcelles du Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et à la libre circulation de ces données.</p>
                        <p class="mb-3">Le Client dispose d'un droit d'accès, de modification, de rectification et de suppression des données qui le concerne (art. 34 de la loi "Informatique et Libertés"). Les Données appartenant au Client gérées par Sortvoices sont et demeurent la propriété du Client. Sortvoices s'engage à garder ces données confidentielles.</p>
                        <p>Les données récoltées par Sortvoices servent notamment à facturer le Client et à lui fournir des identifiants afin de lui permettre de se connecter sur le site {siteURL}.</p>
                    </section>

                    {/* --- Article 12 --- */}
                    <section>
                        <H2 id="article-12" className="pt-6 mb-3" title={article12}/>
                        <p class="mb-3">Les données à caractère personnel qui sont collectées sur ce site sont les suivantes :</p>
                        <p class="mb-3">
                            Ouverture de compte : lors de la création du compte du Client, ses nom(s), prénom, adresse e-mail, numéro de téléphone, adresse postale. <br/>
                            Connexion : lors de la connexion de l’utilisateur au site {siteURL}, celui-ci enregistre notamment ses nom(s), prénom, données de connexion et d’utilisation, données relatives au paiement. <br/>
                            Cookies : les cookies sont utilisés, dans le cadre de l’utilisation du site {siteURL}. <br/>
                            Le Client a la possibilité de désactiver les cookies à partir des paramètres de son navigateur, ce qui peut empêcher le Client d’accéder à certaines pages du site {siteURL}.
                        </p>
                        <p>Les données personnelles collectées auprès des utilisateurs ont pour objectif la mise à disposition des services du site web, leur amélioration et le maintien d’un environnement sécurisé. Plus précisément, les utilisations sont les suivantes :</p>
                        <ul class="ml-3 ml-md-5 my-5">
                            <li class="mb-3"><span class="mr-2">&bull;</span> Accès et utilisation du site {siteURL} par le Client ;</li>
                            <li class="mb-3"><span class="mr-2">&bull;</span> Gestion du fonctionnement et optimisation du site {siteURL} ;</li>
                            <li class="mb-3"><span class="mr-2">&bull;</span> Organisation des conditions d’utilisation des services de paiement ;</li>
                            <li class="mb-3"><span class="mr-2">&bull;</span> Vérification, identification et authentification des données transmises par l’utilisateur ;</li>
                            <li><span class="mr-2">&bull;</span> Gestion des éventuels litiges avec les Clients.</li>
                        </ul>
                        <p class="mb-3">Si le Client a donné son accord lors de son inscription, ses informations personnelles peuvent également servir à la constitution d’un fichier destiné à des fins de prospection commerciale.</p>
                        <p>Les données personnelles peuvent être partagées avec des sociétés tierces, dans les cas suivants :</p>
                        <ul class="ml-3 ml-md-5 mt-5">
                            <li class="mb-3"><span class="mr-2">&bull;</span> Quand le Client utilise les services de paiement, pour la mise en œuvre de ces services,le Prestataire est en relation avec des sociétés bancaires et financières tierces avec lesquelles il a passé des contrats ;</li>
                            <li class="mb-3"><span class="mr-2">&bull;</span> Si la loi l’exige, le Prestataire peut effectuer la transmission de données pour donner suite aux réclamations présentées contre la SAS Sortvoices et se conformer aux procédures administratives et judiciaires ;</li>
                            <li><span class="mr-2">&bull;</span> Si le Prestataire est impliqué dans une opération de fusion, acquisition, cession d’actifs ou procédure de redressement judiciaire, il pourra être amené à céder ou partager tout ou partie de ses actifs, y compris les données à caractère personnel. Dans ce cas, les Clients seraient informés, avant que les données à caractère personnel ne soient transférées à une tierce partie.</li>
                        </ul>
                    </section>

                </Container>
            </div>
        )
    }
}