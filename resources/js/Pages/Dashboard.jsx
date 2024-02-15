import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography } from "antd";

function Dashboard(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`WELCOME TO SLN DEVELOPERS`}>
                <Typography.Text>You're logged in!</Typography.Text>
            </Card>
        </>
    );
}

Dashboard.layout = (page) => <AuthenticatedLayout children={page} />;

export default Dashboard;
