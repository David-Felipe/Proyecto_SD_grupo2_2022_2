import * as React from "react";

const Logo = "https://images.pexels.com/photos/13722193/pexels-photo-13722193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export default class FirstComponent extends React.Component<unknown> {
    render() {
        return (
            <div>
                <h3>A Simple React Component Example with Typescript</h3>
                <div>
                    <img height="250" src={Logo} title="ja ja" />
                </div>
                <p>This component should show an old one thinking.</p>
                <p>Saqué el tutorial para hacer esto de logrocket.</p>
            </div>
        );
    }
}