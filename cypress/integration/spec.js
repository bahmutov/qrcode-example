/// <reference types="cypress" />

import { Decoder } from '@nuintun/qrcode'

it('decodes QR code', () => {
  cy.fixture('frame.png', 'base64')
    .then((base64) => `data:image/png;base64,${base64}`)
    .then((imageSrc) => {
      // https://www.npmjs.com/package/@nuintun/qrcode
      const qrcode = new Decoder()
      return qrcode.scan(imageSrc)
    })
    .its('data')
    .then(cy.log)
    .should('include', 'cypress.tips')
})
