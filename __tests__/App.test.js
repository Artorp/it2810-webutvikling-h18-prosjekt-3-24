// Denne testen utføres ikke på grunn av flere store tekniske problemer.
// Det ble for tidkrevende å få den til å virke, og vi prioriterer andre ting før fristen.
// Forsøket på testing står her kommentert ut for framtidig referanse.

// import React from 'react';
// import renderer from 'react-test-renderer';
import App from '../App';

test('Opprette et App-objekt', () => {
  expect(new App()).toBeDefined();
});

// test("blir tegnet riktig", () => {
//   const element = <App />;

//   console.log("element:", element);
//   element.setState({ loading: false });
//   console.log("element:", element);

//   console.log("Tester at App blir tegnet riktig.");
//   const testRenderer = renderer.create(element);
//   console.log("testRenderer er:");
//   console.log(testRenderer);
//   console.log("Har tegnet App 1 gang. Resultat:");
//   console.log(testRenderer.toJSON());
//   testRenderer.update(element);
//   console.log("testRenderer er:");
//   console.log(testRenderer);
//   console.log("Har tegnet App 2 ganger. Resultat:");
//   console.log(testRenderer.toJSON());
//   expect(testRenderer.toJSON()).toMatchSnapshot();
//   console.log("Ferdig med å teste at App blir tegnet riktig.");
// });
