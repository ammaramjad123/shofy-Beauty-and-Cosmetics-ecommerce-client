import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "@/redux/features/auth/authSlice";
import { FaFlagUsa } from "react-icons/fa";
import { TfiFlag } from "react-icons/tfi"; // simple UK flag icon

// ✅ Static Language (English only)
function Language() {
  return (
    <div className="tp-header-lang d-flex align-items-center gap-2">
      <span className="tp-header-lang-text">English</span>
    </div>
  );
}

// ✅ Static Currency (USD only)
function Currency() {
  return (
    <div className=" tp-header-currency d-flex align-items-center gap-2">
      <span className="tp-header-currency-text">USD</span>
    </div>
  );
}

// ✅ Setting Dropdown
function ProfileSetting({ active, handleActive }) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  // handle logout
  const handleLogout = () => {
    dispatch(userLoggedOut());
    router.push("/");
  };

  return (
    <div className="tp-header-top-menu-item tp-header-setting">
      <span
        onClick={() => handleActive("setting")}
        className="tp-header-setting-toggle"
        id="tp-header-setting-toggle"
      >
        Setting
      </span>
      <ul className={active === "setting" ? "tp-setting-list-open" : ""}>
        <li>
          <Link href="/profile">My Profile</Link>
        </li>
        <li>
          <Link href="/wishlist">Wishlist</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
        <li>
          {!user?.name && (
            <Link href="/login" className="cursor-pointer">
              Login
            </Link>
          )}
          {user?.name && (
            <a onClick={handleLogout} className="cursor-pointer">
              Logout
            </a>
          )}
        </li>
      </ul>
    </div>
  );
}

// ✅ Header Top Right
const HeaderTopRight = () => {
  const [active, setIsActive] = useState("");

  const handleActive = (type) => {
    if (type === active) {
      setIsActive("");
    } else {
      setIsActive(type);
    }
  };

  return (
    <div className="tp-header-top-menu d-flex align-items-center justify-content-end gap-4">
      <Language />
      <Currency />
      <ProfileSetting active={active} handleActive={handleActive} />

      <style jsx>{`
        .tp-header-top-menu-item {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: default;
        }

        .tp-header-lang-text,
        .tp-header-currency-text {
          font-size: 14px;
          font-weight: 500;
          color: #111;
        }

        .tp-header-top-menu {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        @media (max-width: 991px) {
          .tp-header-top-menu {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default HeaderTopRight;
