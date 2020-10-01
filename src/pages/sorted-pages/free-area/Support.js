import React from 'react';
import { 
    Container,
    Row,
    Col
} from 'react-bootstrap';

export default class Faq extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div class="layout-style">
                <Container id="faq" className="px-0 mt-6 w-100 text-center d-flex flex-column align-items-center">
                    <h1 class="z-24">Support et assistance</h1>
                    <p class="mt-4">
                        Afin de pouvoir améliorer en continu la qualité des services que nous vous proposons, merci de nous faire part de vos retours concernant : <br/> 
                        Les différentes problématiques et questionnements que vous rencontrez lors de l'utilisation de ce site web
                    </p>
                    <main class="container-fluid layout-style">
                        {/*
                        <form onSubmit={this.handleSubmitForm} method="get" class="block-style d-flex flex-column">
                            <H4 title="Votre message"/>
                            <Input
                                label="Sujet"
                                for="supportSubject"
                                onChange={this.handleSubjectChange}
                                name="subject"
                                type="text"
                                required={true}
                                value={this.state.subject}
                            />
                            <Textarea
                                label="Message"
                                placeholder="Posez une question ou expliquez votre problème. Soyez aussi précis que possible si une action réalisée a causé un problème technique..."
                                onChange={this.handleContentChange}
                                for="supportMessage"
                                name="content"
                                required={true}
                                value={this.state.content}
                            />
                            <PrimaryButton
                                sizeMedium
                                className="pmy-btn pmy-btn-full pmy-btn-h-bg-full pmy-btn-f-shadow pmy-btn-f-bg-full ml-auto"
                                label="Envoyer le message"
                                type="submit"
                            />
                        </form>
                        */}
                    </main>
                </Container>
            </div>
        )
    }
}