exports.create = (name, email) => {
   const payload = {
      name,
      email
   };
   return sign(payload, process.env.TOKEN_SECRET, {

   });
};