export function getAssociations(_, res) {
    res.send([{ "registration_date": 1, "name": "Association 1" }])
}


export function findByregistration_date(_, res) {
    res.send({ "registration_date": 1, "name": "Association 1" })
}