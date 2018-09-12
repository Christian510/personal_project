module.exports = {
  create: (req, res) => {
    const {
      friend1,
      email1,
      phone1,
      friend2,
      email2,
      phone2,
      friend3,
      email3,
      phone3,
      friend4,
      email4,
      phone4,
      doctor,
      doctor_email,
      doctor_phone,
      therapist,
      therapist_email,
      therapist_phone
    } = req.body

    const {
      user_id
    } = req.session.user

    req.app.get('db').doctors.create_doctors([doctor, doctor_email, doctor_phone, user_id])

    req.app.get('db').doctors.create_therapist([therapist, therapist_email, therapist_phone, user_id])

    req.app.get('db').friend.create_friend1([friend1, email1, phone1, user_id])

    req.app.get('db').friend.create_friend2([friend2, email2, email2, user_id])

    req.app.get('db').friend.create_friend3([friend3, email3, email3, user_id])
    
    req.app.get('db').friend.create_friend4([friend4, email4, email4, user_id])
   
  }
}

