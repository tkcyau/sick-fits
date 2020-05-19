import PleaseSignin from "../components/PleaseSignIn";
import OrderList from "../components/OrderList";
const OrdersPage = (props) => (
  <div>
    <PleaseSignin>
      <OrderList />
    </PleaseSignin>
  </div>
);

export default OrdersPage;
