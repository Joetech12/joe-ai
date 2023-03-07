import NewChat from "./NewChat"

function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            <div>
                {/* New chat */}
                <NewChat/>
                <div>
                    {/* Model selection */}
                </div>

                {/* Map through the chat rows */}
            </div>
        </div>
    </div>
  )
}

export default SideBar
