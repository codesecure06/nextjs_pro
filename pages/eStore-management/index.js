import Wrapper from "../../components/Wrapper";
import styles from "./index.module.scss";
import { CgMenuLeft } from "react-icons/cg";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
// import Score from "./auth/Score.png";
// import EStoreProductGroups from "../../components/EStoreProductGroups"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function EStoreManagement() {
  const [said, setsaid] = useState(false);
  const [said1, setsaid1] = useState(false);
  const [said2, setsaid2] = useState(false);
  const hendalclick = () => {
    setsaid1(false);
    setsaid2(false);
    setsaid(!said);
  };
  const hendalclick1 = () => {
    setsaid(false);
    setsaid1(!said1);
  };
  const hendalclick2 = () => {
    setsaid(false);
    setsaid1(false);
    setsaid2(!said2);
  };
  // console.log("first ::", Score.src);
  return (
    <Wrapper active="eStore Management">
      <div className="grid gap-4 grid-cols-2 md:mx-0 mx-4 md:pb-0 pb-4">
        <div>
          <div>
            <h1 className="pt-10 md:pl-8">
              <b>eStore Management</b>
            </h1>
          </div>
          <div className="pt-12 md:pl-8">
            <Menu
              as="div"
              className={[
                styles.ProductsOptionsSM,
                "relative inline-block text-left",
              ].join(" ")}
            >
              <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                  Options
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  style={{ zIndex: "99" }}
                >
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          <div className="pr-10 flex">
                            <div className="p-3">
                              <img src="/dashboard/images/Product .png" />
                            </div>
                            <h5 className="py-3 top-navbar">Products</h5>
                          </div>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          <div className="pr-10  flex">
                            <div className="p-3">
                              <img src="/dashboard/images/Stocks.png" />
                            </div>
                            <h5 className="py-3 top-navbar">Stocks</h5>
                          </div>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          <div className="pr-10 flex">
                            <div className="p-3">
                              <img src="/dashboard/images/Services.png" />
                            </div>
                            <h5 className="py-3 top-navbar">Services</h5>
                          </div>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          <div className="pr-10 flex">
                            <div className="p-3">
                              <img src="/dashboard/images/Company.png" />
                            </div>
                            <h5 className="py-3 top-navbar">Company</h5>
                          </div>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          <div className="pr-10 flex">
                            <div className="p-3">
                              <img src="/dashboard/images/eStore.png" />
                            </div>
                            <h5 className="py-3 top-navbar">eStore</h5>
                          </div>
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <ul className={[styles.ProductsOptionsLg, "flex"].join(" ")}>
              <li className="pr-10 border-b-4 border-blue-400  flex cursor-pointer">
                <div className={[styles.Products_img, "p-3 "].join(" ")}>
                  <img src="/dashboard/images/Product .png" />
                </div>
                <h5 className="py-3 top-navbar">Products</h5>
              </li>
              <li className="pr-10 border-b-2 flex cursor-pointer">
                <div className={[styles.Products_img, "p-3 "].join(" ")}>
                  <img src="/dashboard/images/Stocks.png" />
                </div>
                <h5 className="py-3 top-navbar">Stocks</h5>
              </li>
              <li className="pr-10 border-b-2 flex cursor-pointer">
                <div className={[styles.Products_img, "p-3 "].join(" ")}>
                  <img src="/dashboard/images/Services.png" />
                </div>
                <h5 className="py-3 top-navbar">Services</h5>
              </li>
              <li className="pr-10 border-b-2 flex cursor-pointer">
                <div className={[styles.Products_img, "p-3 "].join(" ")}>
                  <img src="/dashboard/images/Company.png" />
                </div>
                <h5 className="py-3 top-navbar">Company</h5>
              </li>
              <li className="pr-10 border-b-2 flex cursor-pointer">
                <div className={[styles.Products_img, "p-3 "].join(" ")}>
                  <img src="/dashboard/images/eStore.png" />
                </div>
                <h5 className="py-3 Products-img top-navbar">eStore</h5>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex">
          <div className="ml-auto pt-10">
            <img src="/dashboard/images/score-meter.png" className="" alt="" />
          </div>
          <div className="">
            <img
              src="/dashboard/images/3d-flame-286 1.png"
              className=""
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className={[styles.productRow, "md:mx-8 mx-4 items-center"].join(" ")}
      >
        <div className={[styles.NEWproduct, "flex items-center"].join(" ")}>
          <button
            className={[
              styles.plusbtn,
              "flex justify-center items-center plusbtn md:p-3 sm:p-3 p-2",
            ].join(" ")}
          >
            <div className="">
              <img
                src="/dashboard/images/plus.png"
                className="xl:pr-4 sm:p-0"
              />
            </div>
            <p className={[styles.plustext].join(" ")}>Add New Product</p>
          </button>
          <Menu
            as="div"
            className={[
              styles.NavbarSm,
              "relative inline-block text-left ml-auto",
            ].join(" ")}
          >
            <div>
              <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                Options
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                style={{ zIndex: "99" }}
              >
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        ALL
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Approved
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Pending
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Rejected
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Inactive (10)
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <ul className={[styles.NavbarLg, "ml-auto"].join(" ")}>
            <li
              className={[styles.ProductNavbarActive, "cursor-pointer"].join(
                " "
              )}
            >
              ALL
            </li>
            <li className={[styles.ProductNavbar, "cursor-pointer"].join(" ")}>
              Approved
            </li>
            <li className={[styles.ProductNavbar, "cursor-pointer"].join(" ")}>
              Pending
            </li>
            <li className={[styles.ProductNavbar, "cursor-pointer"].join(" ")}>
              Rejected
            </li>
            <li className={[styles.ProductNavbar, "cursor-pointer"].join(" ")}>
              Inactive (10)
            </li>
          </ul>
        </div>
        <ul className={[styles.search, "flex"].join(" ")}>
          <li
            className={[styles.ProductNavbar2, "flex items-center"].join(" ")}
            style={{ width: "80%" }}
          >
            <div className="pr-4">
              <label for="fname">
                <img src="/dashboard/images/search.png" />
              </label>
            </div>
            <div className="" style={{ width: "90%" }}>
              <input
                className={[styles.NavbarInput, "py-2"].join(" ")}
                placeholder="Search"
                id="fname"
              />
            </div>
          </li>
          <li
            className="flex justify-end items-center"
            style={{ width: "20%" }}
          >
            <div className="mr-4">
              <img src="/dashboard/images/Add New..png" />
            </div>
          </li>
        </ul>
      </div>
      {/* <button onClick={hendalclick}>3rw</button> */}
      <div className={[styles.said_contentSM, "mx-5"].join(" ")}>
        <div className={[styles.switchbtn, "flex p-1 my-5"].join(" ")}>
          <div
            className={[
              styles.Groupwise,
              "bg-white rounded-xl w-1/2 flex justify-center items-center h-12",
            ].join(" ")}
          >
            Groupwise
          </div>
          <div
            className={[
              styles.Tags,
              "w-1/2 flex justify-center items-center",
            ].join(" ")}
          >
            Tags
          </div>
        </div>
        <div className="flex">
          <div className={[styles.AddGroupbtn, "flex p-2"].join(" ")}>
            <div className="m-2">
              <img src="/dashboard/images/addgrup.png" />
            </div>
            <spen className={[styles.AddGroup, "p-2"].join(" ")}>
              Add New Group
            </spen>
          </div>
          <Menu
            as="div"
            className={[
              styles.NavbarSm,
              "relative inline-block text-left ml-auto",
            ].join(" ")}
          >
            <div>
              <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                Options
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                style={{ zIndex: "99" }}
              >
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        <div
                          className={[
                            styles,
                            "flex items-center justify-between p-1 px-2 my-1",
                          ].join(" ")}
                        >
                          <spen className={[styles, "text-s p-2"].join(" ")}>
                            All (6)
                          </spen>
                          <spen className={[styles].join(" ")}>
                            <img src="/dashboard/images/next.png" />
                          </spen>
                        </div>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        <div
                          className={[
                            styles,
                            "flex items-center justify-between p-1 px-2 my-1",
                          ].join(" ")}
                        >
                          <spen className={[styles, "text-s p-2"].join(" ")}>
                            Highmast (4){" "}
                          </spen>
                          <spen className={[styles].join(" ")}>
                            <img src="/dashboard/images/next.png" />
                          </spen>
                        </div>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        <div
                          className={[
                            styles,
                            "flex items-center justify-between p-1 px-2 my-1",
                          ].join(" ")}
                        >
                          <spen className={[styles, "text-s p-2"].join(" ")}>
                            Street Light Poles (2)
                          </spen>
                          <spen className={[styles].join(" ")}>
                            <img src="/dashboard/images/next.png" />
                          </spen>
                        </div>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        <div
                          className={[
                            styles,
                            "flex items-center justify-between p-1 px-2 my-1",
                          ].join(" ")}
                        >
                          <spen className={[styles, "text-s p-2"].join(" ")}>
                            Pole Brackets (3)
                          </spen>
                          <spen className={[styles].join(" ")}>
                            <img src="/dashboard/images/next.png" />
                          </spen>
                        </div>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        <div
                          className={[
                            styles,
                            "flex items-center justify-between p-1 px-2 my-1",
                          ].join(" ")}
                        >
                          <spen className={[styles, "text-s p-2"].join(" ")}>
                            LED Lights (4)
                          </spen>
                          <spen className={[styles].join(" ")}>
                            <img src="/dashboard/images/next.png" />
                          </spen>
                        </div>
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <div className="flex mx-8 pt-3">
        <div className={[styles.said].join(" ")}>
          <div className={[styles.said_content].join(" ")}>
            <div
              className={[
                styles.switchbtn,
                "flex p-1 mb-6 cursor-pointer",
              ].join(" ")}
            >
              <div
                className={[
                  styles.Groupwise,
                  "bg-white rounded-xl w-1/2 flex justify-center items-center h-12",
                ].join(" ")}
              >
                Groupwise
              </div>
              <div
                className={[
                  styles.Tags,
                  "w-1/2 flex justify-center items-center h-12 rounded-xl  hover:bg-white text-black",
                ].join(" ")}
              >
                Tags
              </div>
            </div>
            <div
              className={[styles.AddGroupbtn, "flex p-2 cursor-pointer"].join(
                " "
              )}
            >
              <div className="m-2">
                <img src="/dashboard/images/addgrup.png" />
              </div>
              <spen className={[styles.AddGroup, "p-2 "].join(" ")}>
                Add New Group
              </spen>
            </div>
            <div>
              <div
                className={[
                  styles.dropdownbtn,
                  "p-1 px-2 my-1 cursor-pointer",
                ].join(" ")}
                onClick={hendalclick2}
              >
                <div className="flex items-center justify-between">
                  <spen className={[styles, "text-s p-2 "].join(" ")}>
                    All (6)
                  </spen>
                  <spen className={[styles].join(" ")}>
                    <img src="/dashboard/images/next.png" />
                  </spen>
                </div>
                {said2 && (
                  <div className={[styles.dd, "mt-3"].join(" ")}>
                    <span>12.5mtr Highmast Pole</span> <br />
                    <span> Highmast Pole</span>
                    <br />
                    <span> Flag Mast Pole</span>
                    <br />
                    <span> Stadium Mast Pole</span>
                  </div>
                )}
              </div>

              <div
                className={[
                  styles.dropdownbtn,
                  " p-1 px-2 my-1 cursor-pointer",
                ].join(" ")}
                onClick={hendalclick}
              >
                <div className="flex items-center justify-between">
                  <spen className={[styles, "text-s p-2 "].join(" ")}>
                    Highmast (4){" "}
                  </spen>
                  <spen className={[styles].join(" ")}>
                    <img src="/dashboard/images/next.png" />
                  </spen>
                </div>
                {said && (
                  <div className={[styles.dd, "mt-3"].join(" ")}>
                    <span>12.5mtr Highmast Pole</span> <br />
                    <span> Highmast Pole</span>
                    <br />
                    <span> Flag Mast Pole</span>
                    <br />
                    <span> Stadium Mast Pole</span>
                  </div>
                )}
              </div>
              <div
                className={[
                  styles.dropdownbtn,
                  "p-1 px-2 my-1 cursor-pointer",
                ].join(" ")}
                onClick={hendalclick1}
              >
                <div className="flex items-center justify-between">
                  <spen className={[styles, "text-s p-2 "].join(" ")}>
                    Street Light Poles (2)
                  </spen>
                  <spen className={[styles].join(" ")}>
                    <img src="/dashboard/images/next.png" />
                  </spen>
                </div>
                {said1 && (
                  <div className={[styles.dd, "mt-3"].join(" ")}>
                    <span> Flag Mast Pole</span>
                    <br />
                    <span> Stadium Mast Pole</span>
                  </div>
                )}
              </div>
              <div
                className={[
                  styles.dropdownbtn,
                  "flex items-center justify-between p-1 px-2 my-1 cursor-pointer",
                ].join(" ")}
              >
                <spen className={[styles, "text-s p-2 "].join(" ")}>
                  Pole Brackets
                </spen>
                <spen className={[styles].join(" ")}>
                  <img src="/dashboard/images/next.png" />
                </spen>
              </div>
              <div
                className={[
                  styles.dropdownbtn,
                  "flex items-center justify-between p-1 px-2 my-1 cursor-pointer",
                ].join(" ")}
              >
                <spen className={[styles, "text-s p-2 "].join(" ")}>
                  LED Lights
                </spen>
                <spen className={[styles].join(" ")}>
                  <img src="/dashboard/images/next.png" />
                </spen>
              </div>
              {/* <div
                className={[styles.dropdownContent, "p-4 bg-red-400"].join(" ")}
              >
                <span className="">Highmast</span>
                <div className={[styles.dd, "mt-3"].join(" ")}>
                  <span>12.5mtr Highmast Pole</span> <br />
                  <span> Highmast Pole</span>
                  <br />
                  <span> Flag Mast Pole</span>
                  <br />
                  <span> Stadium Mast Pole</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div
          className={[styles.crd_content].join(" ")}
          style={{ width: "85%" }}
        >
          <div className={[styles.cards]}>
            <div className={[styles.card]}>
              <div className={[styles.cardImg, "flex p-2"].join(" ")}>
                <div className="ml-auto p-3">
                  <img src="/dashboard/images/menucard.png" />
                </div>
                <div className={[styles.bottomText].join(" ")}>
                  <div className={[styles.cardItam, "p-2"].join(" ")}>
                    <div className="">
                      <div className={[styles.Itam, "p-2"].join(" ")}>
                        <img src="/dashboard/images/plus.png" className="" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-2 h-48">
                    <div className="flex justify-between w-full py-1">
                      <div className="flex">
                        <div>
                          <img src="/dashboard/images/Veification button.png" />
                        </div>
                        <div>
                          <span className="">High Bay Lights</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <p className="text-xs">4 days ago</p>
                      </div>
                    </div>
                    <h1 className="text-lg font-bold pl-3 py-1">
                      ₹99,999 - ₹10.80 lakhs
                      <spen className="text-xs">/units</spen>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={[styles.card]}>
              <div className={[styles.cardImg, "flex p-2"].join(" ")}>
                <div className="ml-auto p-3">
                  <img src="/dashboard/images/menucard.png" />
                </div>
                <div className={[styles.bottomText].join(" ")}>
                  <div className={[styles.cardItam, "p-2"].join(" ")}>
                    <div className="">
                      <div className={[styles.Itam, "p-2"].join(" ")}>
                        <img src="/dashboard/images/plus.png" className="" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-2 h-48">
                    <div className="flex justify-between w-full py-1">
                      <div className="flex">
                        <div>
                          <img src="/dashboard/images/Veification button.png" />
                        </div>
                        <div>
                          <span className="">High Bay Lights</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <p className="text-xs">4 days ago</p>
                      </div>
                    </div>
                    <h1 className="text-lg font-bold pl-3 py-1">
                      ₹99,999 - ₹10.80 lakhs
                      <spen className="text-xs">/units</spen>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={[styles.card]}>
              <div className={[styles.cardImg, "flex p-2"].join(" ")}>
                <div className="ml-auto p-3">
                  <img src="/dashboard/images/menucard.png" />
                </div>
                <div className={[styles.bottomText].join(" ")}>
                  <div className={[styles.cardItam, "p-2"].join(" ")}>
                    <div className="">
                      <div className={[styles.Itam, "p-2"].join(" ")}>
                        <img src="/dashboard/images/plus.png" className="" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-2 h-48">
                    <div className="flex justify-between w-full py-1">
                      <div className="flex">
                        <div>
                          <img src="/dashboard/images/Veification button.png" />
                        </div>
                        <div>
                          <span className="">High Bay Lights</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <p className="text-xs">4 days ago</p>
                      </div>
                    </div>
                    <h1 className="text-lg font-bold pl-3 py-1">
                      ₹99,999 - ₹10.80 lakhs
                      <spen className="text-xs">/units</spen>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={[styles.card]}>
              <div className={[styles.cardImg, "flex p-2"].join(" ")}>
                <div className="ml-auto p-3">
                  <img src="/dashboard/images/menucard.png" />
                </div>
                <div className={[styles.bottomText].join(" ")}>
                  <div className={[styles.cardItam, "p-2"].join(" ")}>
                    <div className="">
                      <div className={[styles.Itam, "p-2"].join(" ")}>
                        <img src="/dashboard/images/plus.png" className="" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-2 h-48">
                    <div className="flex justify-between w-full py-1">
                      <div className="flex">
                        <div>
                          <img src="/dashboard/images/Veification button.png" />
                        </div>
                        <div>
                          <span className="">High Bay Lights</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <p className="text-xs">4 days ago</p>
                      </div>
                    </div>
                    <h1 className="text-lg font-bold pl-3 py-1">
                      ₹99,999 - ₹10.80 lakhs
                      <spen className="text-xs">/units</spen>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={[styles.card]}>
              <div className={[styles.cardImg, "flex p-2"].join(" ")}>
                <div className="ml-auto p-3">
                  <img src="/dashboard/images/menucard.png" />
                </div>
                <div className={[styles.bottomText].join(" ")}>
                  <div className={[styles.cardItam, "p-2"].join(" ")}>
                    <div className="">
                      <div className={[styles.Itam, "p-2"].join(" ")}>
                        <img src="/dashboard/images/plus.png" className="" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-2 h-48">
                    <div className="flex justify-between w-full py-1">
                      <div className="flex">
                        <div>
                          <img src="/dashboard/images/Veification button.png" />
                        </div>
                        <div>
                          <span className="">High Bay Lights</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <p className="text-xs">4 days ago</p>
                      </div>
                    </div>
                    <h1 className="text-lg font-bold pl-3 py-1">
                      ₹99,999 - ₹10.80 lakhs
                      <spen className="text-xs">/units</spen>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={[styles.card]}>
              <div className={[styles.cardImg, "flex p-2"].join(" ")}>
                <div className="ml-auto p-3">
                  <img src="/dashboard/images/menucard.png" />
                </div>
                <div className={[styles.bottomText].join(" ")}>
                  <div className={[styles.cardItam, "p-2"].join(" ")}>
                    <div className="">
                      <div className={[styles.Itam, "p-2"].join(" ")}>
                        <img src="/dashboard/images/plus.png" className="" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-2 h-48">
                    <div className="flex justify-between w-full py-1">
                      <div className="flex">
                        <div>
                          <img src="/dashboard/images/Veification button.png" />
                        </div>
                        <div>
                          <span className="">High Bay Lights</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <p className="text-xs">4 days ago</p>
                      </div>
                    </div>
                    <h1 className="text-lg font-bold pl-3 py-1">
                      ₹99,999 - ₹10.80 lakhs
                      <spen className="text-xs">/units</spen>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={[styles.card]}>
              <div className={[styles.cardImg, "flex p-2"].join(" ")}>
                <div className="ml-auto p-3">
                  <img src="/dashboard/images/menucard.png" />
                </div>
                <div className={[styles.bottomText].join(" ")}>
                  <div className={[styles.cardItam, "p-2"].join(" ")}>
                    <div className="">
                      <div className={[styles.Itam, "p-2"].join(" ")}>
                        <img src="/dashboard/images/plus.png" className="" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-2 h-48">
                    <div className="flex justify-between w-full py-1">
                      <div className="flex">
                        <div>
                          <img src="/dashboard/images/Veification button.png" />
                        </div>
                        <div>
                          <span className="">High Bay Lights</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <p className="text-xs">4 days ago</p>
                      </div>
                    </div>
                    <h1 className="text-lg font-bold pl-3 py-1">
                      ₹99,999 - ₹10.80 lakhs
                      <spen className="text-xs">/units</spen>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={[styles.card]}>
              <div className={[styles.cardImg, "flex p-2"].join(" ")}>
                <div className="ml-auto p-3">
                  <img src="/dashboard/images/menucard.png" />
                </div>
                <div className={[styles.bottomText].join(" ")}>
                  <div className={[styles.cardItam, "p-2"].join(" ")}>
                    <div className="">
                      <div className={[styles.Itam, "p-2"].join(" ")}>
                        <img src="/dashboard/images/plus.png" className="" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-2 h-48">
                    <div className="flex justify-between w-full py-1">
                      <div className="flex">
                        <div>
                          <img src="/dashboard/images/Veification button.png" />
                        </div>
                        <div>
                          <span className="">High Bay Lights</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <p className="text-xs">4 days ago</p>
                      </div>
                    </div>
                    <h1 className="text-lg font-bold pl-3 py-1">
                      ₹99,999 - ₹10.80 lakhs
                      <spen className="text-xs">/units</spen>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={[styles.card]}>
              <div className={[styles.cardImg, "flex p-2"].join(" ")}>
                <div className="ml-auto p-3">
                  <img src="/dashboard/images/menucard.png" />
                </div>
                <div className={[styles.bottomText].join(" ")}>
                  <div className={[styles.cardItam, "p-2"].join(" ")}>
                    <div className="">
                      <div className={[styles.Itam, "p-2"].join(" ")}>
                        <img src="/dashboard/images/plus.png" className="" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-2 h-48">
                    <div className="flex justify-between w-full py-1">
                      <div className="flex">
                        <div>
                          <img src="/dashboard/images/Veification button.png" />
                        </div>
                        <div>
                          <span className="">High Bay Lights</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <p className="text-xs">4 days ago</p>
                      </div>
                    </div>
                    <h1 className="text-lg font-bold pl-3 py-1">
                      ₹99,999 - ₹10.80 lakhs
                      <spen className="text-xs">/units</spen>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
export default EStoreManagement;
