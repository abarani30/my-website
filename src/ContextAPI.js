import React, { Component } from "react";

export const myContext = React.createContext();

export default class ContextAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
      section: "services",
      showNavbar: false,
    };
  }

  render() {
    const { theme, section, showNavbar } = this.state;
    return (
      <myContext.Provider
        value={{
          theme,
          section,
          showNavbar,
          toggleDarkTheme: () => {
            this.setState({
              theme: "dark",
            });
          },
          toggleLightTheme: () => {
            this.setState({
              theme: "light",
            });
          },
          toggleNavbar: () => {
            this.setState({
              showNavbar: !showNavbar,
            });
          },
          changeSection: (sectionName) => {
            this.setState({
              section: sectionName,
            });
          },
        }}
      >
        {this.props.children}
      </myContext.Provider>
    );
  }
}
