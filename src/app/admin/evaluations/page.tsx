import { redirect } from "next/navigation";

export default function EvaluationsIndex() {
    redirect("/admin/evaluations/leaderboard");
}
