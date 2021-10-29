import React, { useEffect } from "react";
import { connect } from "react-redux";

// custom component
import { Card } from "antd";

// action
import { getUserList, getUserListReset } from "../../action/getUserListAction";
import {
  getUserDetail,
  getUserDetailReset,
} from "../../action/getUserDetailAction";

const Home = (props) => {
  // variables
  const {
    getUserList,
    getUserListState,
    getUserListReset,
    getUserDetail,
    getUserDetailState,
    getUserDetailReset,
  } = props;

  // callbacks
  useEffect(() => {
    getUserList();
  }, []);

  // useEffect(() => {
  //   if (getUserListState.apiState === "success") {
  //     console.log(getUserListState.data.success);
  //   }
  // }, [getUserListState]);
  useEffect(() => {
    if (getUserDetailState.apiState === "success") {
      console.log(getUserDetailState.data);
    }
  }, [getUserDetailState]);

  // functions

  const handleClick = (id) => {
    getUserDetail({ id: id });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        {getUserListState.apiState === "success" && (
          <>
            {getUserListState.data.success.map((item, i) => {
              return (
                <div
                  onClick={() => handleClick(item._id)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                  key={i}
                >
                  <span>{item.name}</span>
                  <span>{item.email}</span>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div>
        {getUserDetailState.apiState === "success" && (
          <>
            <span>{getUserDetailState.data.success.name}</span>
            <span>{getUserDetailState.data.success.email}</span>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  getUserListState: state.getUserList,
  getUserDetailState: state.getUserDetail,
});
const mapDispatchToProps = (dispatch) => ({
  getUserList: (params) => dispatch(getUserList(params)),
  getUserListReset: () => dispatch(getUserListReset()),
  getUserDetail: (params) => dispatch(getUserDetail(params)),
  getUserDetailReset: () => dispatch(getUserDetailReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
