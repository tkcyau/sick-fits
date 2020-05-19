import PleaseSignin from "../components/PleaseSignIn";
import Order from "../components/Order";
const OrderPage = (props) => (
  <div>
    <PleaseSignin>
      <Order id={props.query.id} />
    </PleaseSignin>
  </div>
);

export default OrderPage;
