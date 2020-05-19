import React from "react";
import { Query } from "react-apollo";
import { CURRENT_USER_QUERY } from "../components/User";

const AccountPage = () => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data: me }) => {
      console.log(me);
      return (
        <div className="account-info">
          <h2>Name: {me.me.name}</h2>
          <h2>Email: {me.me.email}</h2>
          <h2>UserId: {me.me.id}</h2>
        </div>
      );
    }}
  </Query>
);

export default AccountPage;
