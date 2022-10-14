import React from "react";
import { LOCAL_SERVICE } from "../../service/localService";
import swalUtils from "../../utils/SweetAlert";

export default function SecureView() {
  let localUser = LOCAL_SERVICE.user.get();

  if (localUser) {
    window.location.href = "/login";
  } else {
    swalUtils("error", "You can't access this page", "Please login first");
  }
}
