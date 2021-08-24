import request from "@/utils/request";

export function getAll(mealName) {
  return request({
    method: "get",
    url: `/v1/1/search.php`,
    params: {
      s: mealName,
    },
  });
}

// const getId = (id) => {
//   return request({
//     method: "get",
//     url: "/v1/1/search.php?s=Arrabiata/" + id,
//   });
// };

// export default { getAll, getId };
