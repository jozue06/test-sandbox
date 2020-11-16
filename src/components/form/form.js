import React from "react";
import "./form.scss";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.crudMethod = this.crudMethod.bind(this);
    this.trigger = this.trigger.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange(event) {
    this.setState({ baseUrl: event.target.value });
  }

  crudMethod(value) {
    this.setState({ crudMethod: value });
  }

  trigger() {
    if (
      !this.state.crudMethod ||
      this.state.crudMethod === "" ||
      !this.state.baseUrl ||
      this.state.baseUrl === ""
    ) {
      return alert(
        "Please Input your base URL and select a REST method and try again"
      );
    }

    let oldTextArea = "";

    if (this.state.textarea && this.state.textarea !== "") {
      oldTextArea = this.state.textarea;
    }

    this.setState({
      textarea:
        oldTextArea !== ""
          ? oldTextArea +
            "\n" +
            this.state.crudMethod +
            " " +
            this.state.baseUrl
          : this.state.crudMethod + " " + this.state.baseUrl
    });
  }

  reset() {
    this.setState({ textarea: "", crudMethod: "", baseUrl: "" });
    document.getElementById("baseUrl").value = "";
  }

  render() {
    // console.log(this.state, "state console log");
    return (
      // form that takes input
      <div>
        <form>
          <label>Base Url:</label>
          <input type="text" id="baseUrl" onChange={this.handleChange} />
          <button type="button" onClick={this.trigger}>
            Go
          </button>
        </form>

        <div class="buttonRow">
          <button
            class="btnClass"
            disabled={this.state.crudMethod === "GET"}
            type="button"
            onClick={() => this.crudMethod("GET")}
          >
            GET
          </button>
          <button
            class="btnClass"
            disabled={this.state.crudMethod === "POST"}
            type="button"
            onClick={() => this.crudMethod("POST")}
          >
            POST
          </button>
          <button
            class="btnClass"
            disabled={this.state.crudMethod === "PUT"}
            type="button"
            onClick={() => this.crudMethod("PUT")}
          >
            PUT
          </button>
          <button
            class="btnClass"
            disabled={this.state.crudMethod === "DELETE"}
            type="button"
            onClick={() => this.crudMethod("DELETE")}
          >
            DELETE
          </button>
        </div>

        <div class="textArea">
          <textarea
            disabled={true}
            value={this.state.textarea}
            rows="4"
            cols="50"
          />
        </div>

        <button class="btnClass" type="button" onClick={this.reset}>
          RESET
        </button>
      </div>
    );
  }
}

export default Form;
