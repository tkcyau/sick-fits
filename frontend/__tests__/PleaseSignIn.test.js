import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import wait from "waait";
import PleaseSignin from "../components/PleaseSignIn";
import { CURRENT_USER_QUERY } from "../components/User";
import { MockedProvider } from "react-apollo/test-utils";
import { fakeUser } from "../lib/testUtils";

const notSignedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: null } },
  },
];

const signedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: fakeUser() } },
  },
];

describe("renders the sign in dialog to logged out users", () => {
  it("renders the sign in dialog to logged out users", async () => {
    const wrapper = mount(
      <MockedProvider mocks={notSignedInMocks}>
        <PleaseSignin />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    expect(wrapper.text()).toContain("Please Sign In Before Continuing");
    const SignIn = wrapper.find("Signin");
    expect(SignIn.exists()).toBe(true);
  });

  it("renders the child component when the user is signed in", async () => {
    const Hey = () => <p>Hey!</p>;
    const wrapper = mount(
      <MockedProvider mocks={signedInMocks}>
        <PleaseSignin>
          <Hey />
        </PleaseSignin>
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    // expect(wrapper.find("Hey").exists()).toBe(true);
    expect(wrapper.contains(<Hey />)).toBe(true);
  });
});
