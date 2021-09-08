import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import CountryPicker from "./components/CountryPicker";
import { fetchSpecificCountries } from "./components/api";
import covidImg from "./images/covid.png";
import "./components/style.scss";
import { toast } from "react-toastify";
import Footer from "./components/Footer";

export class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const response = await fetchSpecificCountries();
    this.setState({ data: response });

    toast.info("Loading...", {
      position: "bottom-left",
      draggable: true,
      autoClose: 2000,
    });

    // console.log(response);
  }

  handleCountryChange = async (country) => {
    const response = await fetchSpecificCountries(country);
    this.setState({ data: response, country: country });
    // console.log(response);
    // console.log(country);
    // console.log(this.state.data.confirmed.value);
  };

  render() {
    const { data } = this.state;
    return (
      <div className="container-fluid kontenti">
        <div className="row w-100 d-flex justify-content-center mx-auto my-auto pt-5 pb-3">
          <div className="col-lg-12 text-center pb-5 mb-3 ">
            <img src={covidImg} alt="Covid" className="img-fluid" />
          </div>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Card data={data} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
