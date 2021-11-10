using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace signalR_server.Hubs
{
    public class HelloWorldHub : Hub
    {
        public override Task OnConnectedAsync()
        {
            Clients.Caller.SendAsync("onConnected", "Hello client. This is massage created from server.");
            Clients.Others.SendAsync("onConnected", "Test: someone has joined.");
            return base.OnConnectedAsync();
        }
    }
}
