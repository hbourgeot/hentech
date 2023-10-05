import { Nav } from "@/components/Nav";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

function Internal() {
  let enter = 0;
  const router = useRouter();
  if (typeof window !== "undefined" && enter === 0) {
    enter++;
  }
  return (
    <div>
      <Nav />
      Enter
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default Internal;
