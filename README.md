# braintree-sushi-site
A practice project that processes online credit card transaction with Braintree SDK in sandbox environment

Notes:
- The checkout flow implemented is on its most basic level - user token generation, drop-in UI and nounce-based transaction. No advanced Braintree checkout feature or extensive error handling was used.  
- A yeoman generator (https://www.npmjs.com/package/generator-express) was used for quick express server setup
- The UI is based on an open source project on GitHub(https://github.com/lohithgn/Kendo-UI-Web-Sushi), which is a demo app of Kendo UI. It was chosen because it fit into the online checkout scenario of this project. I modified the checkout page and placed Braintree drop-in UI in it, which matched the page design very well.
