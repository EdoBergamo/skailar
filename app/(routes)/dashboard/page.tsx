import { Sidebar } from "@/components/dashboard/sidebar";

export default function DashboardPage() {
    return (
        <div>
            <Sidebar />

            <main className="py-10 mt-14 ml-2.5 lg:pl-72">
                <div className="px-4 sm:px-6 lg:px-8">
                    {/* TODO: Add account infos */}
                    <h3 className="font-bold text-2xl">Account Information</h3>
                </div>
            </main>
        </div>
    )
}