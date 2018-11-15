export default function postUser(userData) {
 return new Promise(resolve => {
   if (!userData) {
     const response = { success: false };
   }
   const response = { success: true };
   resolve(response);
 });
}
