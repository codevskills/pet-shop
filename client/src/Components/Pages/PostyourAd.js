import React, { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Country, State, City } from "country-state-city";
import { BiImageAdd, BiX } from "react-icons/bi";
import { BsImage } from "react-icons/bs";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

function FormExample() {
  const fileInputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [CountryId, setCountryId] = useState("");
  const [uploadedPhotos, setUploadedPhotos] = useState([
    null,
    null,
    null,
    null
  ]);
  const [PostAddData, setPostAddData] = useState(null);

  const schema = yup.object().shape({
    adTitle: yup.string().required("Ad title is required"),
    description: yup.string().required("Description is required"),
    price: yup.number().required("Price is required"),
    country: yup.string().required("Country is required"),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
    nearby: yup.string().required("Nearby is required"),
    phoneNumber: yup.string().required("Phone number is required")
  });

  // Post api

  const formik = useFormik({
    initialValues: {
      adTitle: "",
      description: "",
      price: "",
      country: "",
      state: "",
      city: "",
      nearby: "",
      phoneNumber: "",
      photo: [],
      terms: false
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      // Handle form submission
      try {
        await axios.post("http://localhost:5000/ad-post", values);
        console.log("Data Submitted Successfully");
      } catch (error) {
        console.error(error);
      }
    }
  });

  useEffect(() => {
    const countriesData = Country.getAllCountries();
    setCountries(countriesData);
  }, []);

  const handleCountryChange = (e) => {
    const selectedCountryId = e.target.value;
    setCountryId(selectedCountryId);
    const selectedCountryName = e.target.options[e.target.selectedIndex].text;
    const statesData = State.getStatesOfCountry(selectedCountryId);
    setStates(statesData);
    setCities([]);
    formik.setFieldValue("country", selectedCountryName);
    formik.setFieldValue("state", "");
    formik.setFieldValue("city", "");
  };

  const handleStateChange = (e) => {
    const selectedStateId = e.target.value;
    const selectedStateName = e.target.options[e.target.selectedIndex].text;
    const citiesData = City.getCitiesOfState(CountryId, selectedStateId);
    setCities(citiesData);
    formik.setFieldValue("state", selectedStateName);
    formik.setFieldValue("city", "");
  };

  const handleFileInputClick = (index) => {
    fileInputRefs[index].current.click();
  };

  const handleFileChange = (e, index) => {
    const selectedFile = e.target.files[0];
    const newPhotos = [...uploadedPhotos];
    newPhotos[index] = selectedFile;
    setUploadedPhotos(newPhotos);

    // Set the value in formik
    formik.setFieldValue("photo", newPhotos);
  };

  const handleRemovePhoto = (index) => {
    const newPhotos = [...uploadedPhotos];
    newPhotos[index] = null;
    setUploadedPhotos(newPhotos);

    // Set the value in formik
    formik.setFieldValue("photo", newPhotos);
  };
  return (
    <div style={{ minHeight: "100vh" }}>
      <Container>
        <Row className="center">
          <h3 className="p-5 text-center">Post Your Ad</h3>
          <div className="d-flex justify-content-center align-items-center bg-body-tertiary p-5 rounded">
            <Form noValidate onSubmit={formik.handleSubmit}>
              <Row>
                <Col md={12}>
                  <Form.Group controlId="adTitle">
                    <Form.Label>Ad title</Form.Label>
                    <Form.Control
                      type="text"
                      name="adTitle"
                      value={formik.values.adTitle}
                      onChange={formik.handleChange}
                      isInvalid={
                        formik.touched.adTitle && !!formik.errors.adTitle
                      }
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {formik.errors.adTitle}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="description"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      isInvalid={
                        formik.touched.description &&
                        !!formik.errors.description
                      }
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {formik.errors.description}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      name="price"
                      value={formik.values.price}
                      onChange={formik.handleChange}
                      isInvalid={formik.touched.price && !!formik.errors.price}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {formik.errors.price}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group controlId="validationFormikCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      as="select"
                      name="country"
                      onChange={handleCountryChange}
                      isInvalid={
                        formik.touched.country && !!formik.errors.country
                      }
                    >
                      <option value="">Select Country</option>
                      {countries.map((country) => (
                        <option key={country.isoCode} value={country.isoCode}>
                          {country.name}
                        </option>
                      ))}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid" tooltip>
                      {formik.errors.country}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group controlId="validationFormikState">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      as="select"
                      name="state"
                      onChange={handleStateChange}
                      isInvalid={formik.touched.state && !!formik.errors.state}
                    >
                      <option value="">Select State</option>
                      {states.map((state) => (
                        <option key={state.isoCode} value={state.isoCode}>
                          {state.name}
                        </option>
                      ))}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid" tooltip>
                      {formik.errors.state}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group controlId="validationFormikCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      as="select"
                      name="city"
                      onChange={formik.handleChange}
                      isInvalid={formik.touched.city && !!formik.errors.city}
                    >
                      <option value="">Select City</option>
                      {cities.map((city) => (
                        <option key={city.id} value={city.id}>
                          {city.name}
                        </option>
                      ))}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid" tooltip>
                      {formik.errors.city}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group controlId="validationFormikNearby">
                    <Form.Label>Nearby</Form.Label>
                    <Form.Control
                      type="text"
                      name="nearby"
                      value={formik.values.nearby}
                      onChange={formik.handleChange}
                      isInvalid={
                        formik.touched.nearby && !!formik.errors.nearby
                      }
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {formik.errors.nearby}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group controlId="validationFormikPhoneNumber">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                      type="text"
                      name="phoneNumber"
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                      isInvalid={
                        formik.touched.phoneNumber &&
                        !!formik.errors.phoneNumber
                      }
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {formik.errors.phoneNumber}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Row className="ps-4 pt-3">Add Pet Photos</Row>
                <Col className="d-flex flex-wrap">
                  {uploadedPhotos.map((photo, index) => (
                    <Col className="Add_Pet_Photos" key={index}>
                      <Form.Group className="position-relative mb-3">
                        {photo ? (
                          <span className="position-relative">
                            <img
                              src={URL.createObjectURL(photo)}
                              alt={`Pet Photo ${index + 1}`}
                              className="uploaded-photo"
                              width="200px"
                              height="auto"
                            />
                            <button
                              type="button"
                              className="remove-photo p-0"
                              onClick={() => handleRemovePhoto(index)}
                            >
                              <BiX className="fs-4" />
                            </button>
                          </span>
                        ) : (
                          <div>
                            <label>
                              <BsImage className="Image_Icon border p-3 border-3" />
                              <input
                                type="file"
                                ref={fileInputRefs[index]}
                                style={{ display: "none" }} // Hide the input element
                                onChange={(e) => handleFileChange(e, index)}
                              />
                            </label>
                          </div>
                        )}
                      </Form.Group>
                    </Col>
                  ))}
                </Col>

                <Col md={12}>
                  <Form.Group className="position-relative mb-3">
                    <Form.Check
                      required
                      name="terms"
                      label="Agree to terms and conditions"
                      onChange={formik.handleChange}
                      isInvalid={!!formik.errors.terms}
                      feedback={formik.errors.terms}
                      feedbackType="invalid"
                      id="validationFormik106"
                      feedbackTooltip
                    />
                  </Form.Group>
                </Col>
                <span>
                  <Button type="submit">Submit form</Button>
                </span>
              </Row>
            </Form>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default FormExample;
