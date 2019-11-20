import React from "react";
import * as _ from "lodash";
import { ProductHelper } from "../../../helpers";

const Specification = ({ product }) => {
  const {
    brand,
    name,
    os,
    processor,
    camera,
    memory,
    storage,
    ports,
    display,
    graphics,
    speakers,
    battery,
    chipset,
    keyboard,
    ac_power,
    weight,
    dimensions,
    price,
    category,
    color,
    opticaldrive,
    security,
    wireless
  } = product;

  return (
    <div id="des-details2" className="tab-pane active">
      <div className="specification-wrap table-responsive">
        <table>
          <tbody>
            <tr>
              <td className="width1">Brand</td>
              <td>{_.upperCase(brand)}</td>
            </tr>
            <tr>
              <td className="width1">Model</td>
              <td>{_.startCase(name)}</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>{_.startCase(category)}</td>
            </tr>
            <tr>
              <td className="width1">Display</td>
              <td>{ProductHelper.getSpecs(display)}</td>
            </tr>
            <tr>
              <td className="width1">OS</td>
              <td>{ProductHelper.getSpecs(os)}</td>
            </tr>
            <tr>
              <td className="width1">Processor</td>
              <td>{ProductHelper.getSpecs(processor)}</td>
            </tr>
            <tr>
              <td className="width1">Chipset</td>
              <td>{chipset}</td>
            </tr>
            <tr>
              <td className="width1">Memory</td>
              <td>
                <ul>{ProductHelper.getSpecs(memory)}</ul>
              </td>
            </tr>
            <tr>
              <td className="width1">Storage</td>
              <td>
                <ul>{ProductHelper.getSpecs(storage)}</ul>
              </td>
            </tr>
            <tr>
              <td className="width1">Graphics</td>
              <td>{ProductHelper.getSpecs(graphics)}</td>
            </tr>
            <tr>
              <td className="width1">Webcam</td>
              <td>{camera}</td>
            </tr>
            <tr>
              <td className="width1">Keyboard</td>
              <td>{keyboard}</td>
            </tr>
            <tr>
              <td className="width1">Ports</td>
              <td>
                <ul>{ProductHelper.getSpecs(ports)}</ul>
              </td>
            </tr>
            <tr>
              <td className="width1">Wireless</td>
              <td>{ProductHelper.getSpecs(wireless)}</td>
            </tr>
            <tr>
              <td className="width1">Speakers</td>
              <td>
                <ul>{ProductHelper.getSpecs(speakers)}</ul>
              </td>
            </tr>
            <tr>
              <td className="width1">Optical-Drive</td>
              <td>{opticaldrive}</td>
            </tr>
            <tr>
              <td className="width1">Battery</td>
              <td>
                <ul>{ProductHelper.getSpecs(battery)}</ul>
              </td>
            </tr>
            <tr>
              <td className="width1">Ac Power</td>
              <td>{ac_power}</td>
            </tr>
            <tr>
              <td className="width1">Security</td>
              <td>{security}</td>
            </tr>
            <tr>
              <td className="width1">Weight</td>
              <td>{weight}</td>
            </tr>
            <tr>
              <td className="width1">Dimensions</td>
              <td>{dimensions}</td>
            </tr>
            <tr>
              <td className="width1">Color</td>
              <td>{color}</td>
            </tr>
            <tr>
              <td className="width1">Price</td>
              <td>{price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Specification;
