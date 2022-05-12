import React from 'react'
import PropTypes from "prop-types";

export default function BnBForm({
                                  setTitle,
                                  sethouseType,
                                  setImage,
                                  setCountry,
                                  setCity,
                                  setCost,
                                  setDescription,
                                  setName,
                                  setisSuperhost,
                                  setStars,
                                  setReviews,
                                  handleForm}){

  return(
    <form onSubmit={handleForm} id="bnb-form">
      <div className="form-group mb-2">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          // value={title}
          onChange={(event)=> setTitle(event.target.value)}
          className="form-control"
          type="text"
          placeholder=""
          // pattern="^\w+\s*\w+$"

        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="houseType">House Type</label>
        <input
          id="houseType"
          name="houseType"
          onChange={(event)=> sethouseType(event.target.value)}
          className="form-control"
          type="text"
          placeholder=""
          // pattern="^\w+\s*\w+$"
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="image">Image</label>
        <input
          id="image"
          name="image"
          onChange={(event)=> setImage(event.target.value)}
          className="form-control"
          type="text"
          placeholder=""
          // pattern="\d{1,}"
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          onChange={(event)=> setCity(event.target.value)}
          className="form-control"
          type="text"
          placeholder=""
          // pattern="\d{1,}"
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="country">Country</label>
        <input
          id="country"
          name="country"
          onChange={(event)=> setCountry(event.target.value)}
          className="form-control"
          type="text"
          placeholder=""
          // pattern="\d{1,}"
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="cost">Cost</label>
        <input
          id="cost"
          name="cost"
          onChange={(event)=> setCost(event.target.value)}
          className="form-control"
          type="number"
          // placeholder=""
          // pattern="\d{1,}"
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          onChange={(event)=> setDescription(event.target.value)}
          className="form-control"
          type="text"
          placeholder=""
          // pattern="\d{1,}"
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          onChange={(event)=> setName(event.target.value)}
          className="form-control"
          type="text"
          placeholder=""
          // pattern="\d{1,}"
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="isSuperhost">isSuperhost</label>
        <input
          id="isSuperhost"
          name="isSuperhost"
          onChange={(event)=> setisSuperhost(event.target.value)}
          // className="form-control"
          type="checkbox"
          // placeholder=""
          // pattern="\d{1,}"
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="stars">Stars</label>
        <input
          id="stars"
          name="stars"
          onChange={(event)=> setStars(event.target.value)}
          className="form-control"
          type="number"
          // placeholder=""
          // pattern="\d{1,}"
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="reviews">Reviews</label>
        <input
          id="reviews"
          name="reviews"
          onChange={(event)=> setReviews(event.target.value)}
          className="form-control"
          type="number"
          // placeholder=""
          // pattern="\d{1,}"
        />
      </div>

      <div className="form-group mb-2">
        <input
          id="submit"
          className="btn btn-primary"
          type="submit"
          value="Submit Form"


        />
      </div>


    </form>
  )

}

BnBForm.propTypes = {

  setTitle: PropTypes.func.isRequired,
  sethouseType: PropTypes.func.isRequired,
  setImage: PropTypes.func.isRequired,
  setCountry: PropTypes.func.isRequired,
  setCity: PropTypes.func.isRequired,
  setCost: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setisSuperhost: PropTypes.func.isRequired,
  setStars: PropTypes.func.isRequired,
  setReviews: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired,

}
