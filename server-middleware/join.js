export default function (req, res, next) {
        const body = req.body
        console.log(req.body)
        insertStatement.run(body.firstname, body.lastname, body.email, body.honorific, body.phone, body.country, body.organization)
        res.json({status: 200, message: "success"})
  }
  