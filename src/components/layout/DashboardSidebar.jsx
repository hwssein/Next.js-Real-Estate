import DashboardMenu from "@/module/DashboardMenu";

function DashboardSidebar({ user }) {
  return (
    <>
      <div className="hidden sm:flex w-60 shadow rounded py-6 ">
        <DashboardMenu user={user} />
      </div>
    </>
  );
}

export default DashboardSidebar;
