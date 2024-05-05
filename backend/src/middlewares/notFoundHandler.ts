import { Request, Response } from 'express';

export const notFoundHandler = (req: Request, res: Response) => {
   const html = `
      <html>
         <head>
            <style>
               /* Add your custom styles here */
               body {
                  font-family: Arial, sans-serif;
                  background-color: #f5f5f5;
                  text-align: center;
               }
               .container {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100vh;
               }
               .message {
                  font-size: 24px;
                  font-weight: bold;
                  color: #ff0000;
                  animation: shake 0.5s infinite;
               }
               @keyframes shake {
                  0% { transform: translateX(0); }
                  25% { transform: translateX(-10px); }
                  50% { transform: translateX(10px); }
                  75% { transform: translateX(-10px); }
                  100% { transform: translateX(0); }
               }
            </style>
         </head>
         <body>
            <div class="container">
               <div class="message">
                  Route not found
               </div>
            </div>
         </body>
      </html>
   `;
   res.setHeader('Content-Type', 'text/html');
   res.status(404).send(html);
};
