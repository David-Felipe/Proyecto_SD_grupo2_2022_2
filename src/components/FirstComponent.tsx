import * as React from "react";

let Logo = "https://icanbecreative.com/resources/files/articles/deadpool-movie-photoshop-tutorial/deadpool-movie-logo-photoshop-tutorial.jpg";

export default class FirstComponent extends React.Component<{}> {
    render() {
        return (
            <div>
                <h3>A Simple React Component Example with Typescript</h3>
                <div>
                    <img height="250" src={Logo} title="ja ja" />
                </div>
                <p>This component should show the deadpool logo.</p>
                <p>Saqué el tutorial para hacer esto de logrocket.</p>
            </div>
        );
    }
}