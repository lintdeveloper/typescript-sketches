import {company, name, address, phone, internet, random} from "faker";

const fakeContacts = new Map();

new Array(3).fill("toto").forEach(() => {
    fakeContacts.set(random.uuid(), {
        firstname: name.firstName(),
        lastName: name.lastName(),
        company: company.companyName(),
        jobTitle: name.jobTitle(),
        address: address.streetAddress(),
        city: address.city(),
        country: address.country(),
        primaryContactNumber: phone.phoneNumber(),
        otherContactNumbers: [phone.phoneNumber(), phone.phoneNumber()],
        primaryEmailAddress: internet.email(),
        otherEmailAddresses: [internet.email(), internet.email()],
        groups: ["Dev", "Node.js"],
        socialMedia: [
            { name: "Linkedin", link: internet.url() },
            { name: "Twitter", link: internet.url() }
        ]
    })
})

export { fakeContacts };