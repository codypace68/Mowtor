import Link from "next/link";
import { useRouter } from "next/router";

export default function SidebarLink({ pagePath, linkText, faIconClass }) {
  const router = useRouter();

  return (
    <li className="items-center">
      <Link href={pagePath}>
        <a
          href="#pablo"
          className={
            "text-xs uppercase py-3 font-bold block " +
            (router.pathname.indexOf(pagePath) !== -1
              ? "text-sky-500 hover:text-sky-600"
              : "text-slate-700 hover:text-slate-500")
          }
        >
          <i
            className={
              faIconClass +
              " mr-2 text-sm " +
              (router.pathname.indexOf(pagePath) !== -1
                ? "opacity-75"
                : "text-slate-300")
            }
          ></i>{" "}
          {linkText}
        </a>
      </Link>
    </li>
  );
}
