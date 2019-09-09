import React from "react";
import * as _ from "lodash";

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

  const ram = memory
    ? Object.keys(memory).map((data, index) => (
        <li key={index}>
          <strong>{_.startCase(data)}</strong> : {memory[data]}
        </li>
      ))
    : null;
  const space = storage
    ? Object.keys(storage).map((data, index) => (
        <li key={index}>
          <strong>{_.startCase(data)}</strong> : {storage[data]}
        </li>
      ))
    : null;
  const port = ports
    ? Object.keys(ports).map((data, index) => (
        <li key={index}>
          <strong>{_.startCase(data)}</strong> : {ports[data]}
        </li>
      ))
    : null;
  const speaker = speakers
    ? Object.keys(speakers).map((data, index) => (
        <li key={index}>
          <strong>{_.startCase(data)}</strong> : {speakers[data]}
        </li>
      ))
    : null;
  const cell = battery
    ? Object.keys(battery).map((data, index) => (
        <li key={index}>
          <strong>{_.startCase(data)}</strong> : {battery[data]}
        </li>
      ))
    : null;
  const disp = display
    ? Object.keys(display).map((data, index) => (
        <li key={index}>
          <strong>{_.startCase(data)}</strong> : {display[data]}
        </li>
      ))
    : null;
  const cpu = processor
    ? Object.keys(processor).map((data, index) => (
        <li key={index}>
          <strong>{_.startCase(data)}</strong> : {processor[data]}
        </li>
      ))
    : null;
  const opsys = os
    ? Object.keys(os).map((data, index) => (
        <li key={index}>
          <strong>{_.startCase(data)}</strong> : {os[data]}
        </li>
      ))
    : null;
  const video = graphics
    ? Object.keys(graphics).map((data, index) => (
        <li key={index}>
          <strong>{_.startCase(data)}</strong> : {graphics[data]}
        </li>
      ))
    : null;
  const wire_less = wireless
    ? Object.keys(wireless).map((data, index) => (
        <li key={index}>
          <strong>{_.startCase(data)}</strong> : {wireless[data]}
        </li>
      ))
    : null;

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
              <td>{disp}</td>
            </tr>
            <tr>
              <td className="width1">OS</td>
              <td>{opsys}</td>
            </tr>
            <tr>
              <td className="width1">Processor</td>
              <td>{cpu}</td>
            </tr>
            <tr>
              <td className="width1">Chipset</td>
              <td>{chipset}</td>
            </tr>
            <tr>
              <td className="width1">Memory</td>
              <td>
                <ul>{ram}</ul>
              </td>
            </tr>
            <tr>
              <td className="width1">Storage</td>
              <td>
                <ul>{space}</ul>
              </td>
            </tr>
            <tr>
              <td className="width1">Graphics</td>
              <td>{video}</td>
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
                <ul>{port}</ul>
              </td>
            </tr>
            <tr>
              <td className="width1">Wireless</td>
              <td>{wire_less}</td>
            </tr>
            <tr>
              <td className="width1">Speakers</td>
              <td>
                <ul>{speaker}</ul>
              </td>
            </tr>
            <tr>
              <td className="width1">Optical-Drive</td>
              <td>{opticaldrive}</td>
            </tr>
            <tr>
              <td className="width1">Battery</td>
              <td>
                <ul>{cell}</ul>
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
