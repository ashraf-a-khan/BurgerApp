import React from "react";
import { Country, State } from "country-state-city";

function Shipping() {
  return (
    <section className="shipping">
      <main>
        <h1></h1>
        <form>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter Street" />
          </div>
          <div>
            <label>City.</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            <label>Country</label>

            <select>
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label>State</label>

            <select>
              <option value="">State</option>
              {State &&
                State.getStatesOfCountry("US").map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label>State</label>
            <input type="text" placeholder="Enter State" />
          </div>
          <div>
            <label>Zip</label>
            <input type="text" placeholder="Enter Zip" />
          </div>
          <button type="submit">Confirm Order</button>
        </form>
      </main>
    </section>
  );
}

export default Shipping;
