import { action, observable} from "mobx";
import React from "react";

class TicketsStore {
    @observable ticket = [];

    @action saveTicket = (tickets) => {
        this.ticket.push(tickets)
      }

      @action getTickets = () => {
        return this.ticket
      }
}

export default new TicketsStore();
