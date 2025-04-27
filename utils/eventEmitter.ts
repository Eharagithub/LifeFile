// Simple event emitter for cross-component communication
// This is used to notify components when a user logs in or out so they can reset their state

type EventCallback = (...args: any[]) => void;

class EventEmitter {
  private events: { [key: string]: EventCallback[] } = {};
  private static instance: EventEmitter;

  // Get singleton instance
  public static getInstance(): EventEmitter {
    if (!EventEmitter.instance) {
      EventEmitter.instance = new EventEmitter();
    }
    return EventEmitter.instance;
  }

  // Subscribe to an event
  on(event: string, callback: EventCallback): void {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
    console.log(`EventEmitter: Registered listener for "${event}", total: ${this.events[event].length}`);
  }

  // Unsubscribe from an event
  off(event: string, callback: EventCallback): void {
    if (!this.events[event]) return;
    const initialLength = this.events[event].length;
    this.events[event] = this.events[event].filter(cb => cb !== callback);
    console.log(`EventEmitter: Removed listener for "${event}", before: ${initialLength}, after: ${this.events[event].length}`);
  }

  // Emit an event with optional arguments
  emit(event: string, ...args: any[]): void {
    if (!this.events[event]) {
      console.log(`EventEmitter: No listeners for "${event}"`);
      return;
    }
    
    console.log(`EventEmitter: Emitting "${event}" to ${this.events[event].length} listeners`);
    this.events[event].forEach(callback => {
      try {
        callback(...args);
      } catch (e) {
        console.error(`Error in event handler for "${event}":`, e);
      }
    });
  }

  // Debug method to check registered listeners
  debug(): void {
    console.log('EventEmitter: Current listeners:', 
      Object.keys(this.events).map(key => ({
        event: key,
        listenerCount: this.events[key].length
      }))
    );
  }
}

// Create a singleton instance
const eventEmitter = EventEmitter.getInstance();

// Make it globally available
declare global {
  var EventEmitter: EventEmitter;
}

// Assign to global scope for easy access across the app
global.EventEmitter = eventEmitter;

export default eventEmitter;