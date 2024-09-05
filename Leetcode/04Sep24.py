def robotSim(commands, obstacles):
    # Directions: North, East, South, West
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
    x = y = 0  # Starting coordinates
    direction_index = 0  # Start facing North
    obstacle_set = set(map(tuple, obstacles))  # Convert obstacles to a set of tuples for O(1) look-up
    max_distance = 0

    for command in commands:
        # print(command)
        if command == -2:  # Turn left
            direction_index = (direction_index - 1) % 4
        elif command == -1:  # Turn right
            direction_index = (direction_index + 1) % 4
        else:  # Move forward
            print('__',command, x,y)
            for _ in range(command):
                print(_)
                next_x = x + directions[direction_index][0]
                next_y = y + directions[direction_index][1]
                if (next_x, next_y) not in obstacle_set:
                    x, y = next_x, next_y
                    max_distance = max(max_distance, x*x + y*y)
                else:
                    break

    return max_distance

# Example usage
commands = [4, -1, 3]
# obstacles = []
# commands = [4,-1,4,-2,4]
# obstacles = [[2,4]]
# commands = [6,-1,-1,6]
obstacles = []
print(robotSim(commands, obstacles))  # Output: 25