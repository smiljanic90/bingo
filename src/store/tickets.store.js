import { action, observable} from "mobx";
import React from "react";

class TicketsStore {
    @observable ticket = [];

    @action addNewTicket = (tickets) => {
        this.ticket.push(tickets)
      }

      @action getAllTickets = () => {
        return this.ticket
      }
      @action resetGame = () => {
        return this.ticket = []
      }
}

export default new TicketsStore();
