import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden"></div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      showIntermediateStepsToggle={true}
      placeholder={
        'Hi! my name is Robbie! Have Questions About Craggle? Fire Away"'
      }
      emoji="🤖"
      titleText="Robbie the Retrieval Robot"
    ></ChatWindow>
  );
}
