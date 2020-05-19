import Item from "../components/Item";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

const fakeItem = {
  id: "ABC123",
  title: "A cool item",
  price: 4000,
  description: "This item is really cool!",
  large: "dog.jpg",
  largeImage: "largedog.jpg",
};

describe("<Item/>", () => {
  it("renders and matches the snapshot", () => {
    const wrapper = shallow(<Item item={fakeItem} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  //   it("renders and displays properly", () => {
  //     // const wrapper = shallow(<Item item={fakeItem} />);
  //     // const PriceTag = wrapper.find("PriceTag");
  //     // console.log(PriceTag.debug());
  //   });
});
