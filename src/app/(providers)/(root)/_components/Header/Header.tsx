"use client";

import { useAuth } from "@/context/auth.context";
import Link from "next/link";

function Header() {
  const { isInitialized, isLogggedIn } = useAuth();

  return (
    <header>
      <div>
        <Link href="/">Bible</Link>
        <nav>
          <ul>
            <li>
              <Link href="">커뮤니티</Link>
            </li>
            <li>
              <Link href="">전문가 찾기</Link>
            </li>
            <li>
              <Link href="">마인드포스팃</Link>
            </li>
            <li>
              <Link href="">뉴스</Link>
            </li>
            <li>
              <Link href="">상담하기</Link>
            </li>
          </ul>
        </nav>

        <div>
          <button>글쓰기</button>
          {isInitialized && isLogggedIn ? (
            <button>로그인</button>
          ) : (
            <button>로그아웃</button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
