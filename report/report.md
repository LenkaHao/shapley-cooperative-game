### Cooperative games and Shapley value



#### 1. Cooperative games

In cooperative games, players are allowed to communication, form coalitions and make binding agreements. We focus on what groups of players can achieve rather than individuals. 



**1. 1 Cooperative games with transferable utility**

For some games, outcomes are specified in terms of a utility that can be divided among a coalition. These are games with transferable utility. The following assumptions are made in a coalitional game with transferable utility:

1. the payoffs may be freely redistributed among its members
2. a universal currency is used for exchange in the system
3. each coalition can be assigned a single value as its payoff

These games consist of

1. $N = \{1, 2, ..., n\}$, a set of players
2. $S$, a coalition, where $S \sub N$
3. a real-valued function $v$ that associates $S$ with $v(S)$, the total payoff of the coalition

The coalitional form of such a game is given by the pair $(N, v)$, and satisfies

1. $v(\empty) = 0$, meaning that the empty set has payoff 0
2. if $S \bigcap T = \emptyset$, then $v(S) + v(T) \le v(S+T)$, meaning that the larger the coalition, the higher the payoff. A game satifies this constraint is superadditive.



*Example: A group of customers must be connected to a power plant provided by a central facility. A customer can either connect to the facility directly, or connect to some other connected customer.*

*In this coalitional game $(N, v)$, $N$ is the set of customers, and $v(S) = ($the cost of connecting all customers directly to the facility$)- ($the cost of the minimum spanning tree that connects all customers in $S$ and the facility)*



**1.2 Payoff vector and the core**

For a coalition game, we are interested in which coalition to form, and how that coalition divides its payoff among its players. According to superadditivity, this coalition should be $N$. We then need to figure out how the payoff $v(N)$ should be split.

Let $\vec{x} = (x_1, x_2, …, x_n)$ denote the payoff division, where player $i$ 's payoff is $x_i$. Then $\vec{x}$ has two properties:

1. For coalition $N$, $\sum^n_{i=1} x_i = v(N)$
2. A player will only receive payoff that is at least the same as the payoff he could obtain by himself. Therefore, $x_i \ge v(\{i\})$ for all $i$

Suppose we have a coalition $S$ with payoff $v(S)$. For a $\vec{x}$, let the total return be $x(S) = \sum_{i \in S} x_i$. 

The payoff vector is only stable when $x(S) \ge v(S)$; otherwise there must exist $y(S) = v(S)$ where the members could receive more than in $\vec{x}$.



The **core** of a coalitional game is the set $C$ of all stable payoff vectors:

$C = \{\vec{x} = (x_1, …, x_n): \sum_{i \in N} x_i = v(N) \space {\rm{and}} \space x(S) \ge v(S) \space {\rm{for all }} \space S \in N \}$

The first condition is from the first property of $\vec{x}$, and the second condition comes from the stability.



*Example: Consider the following three-person game. Three players can together obtain \$1 to share, any two can obtain $\alpha$ , and a singer player gets nothing.*

*$v(N) = 1$, $v(\{1, 2\}) = v(\{1, 3\}) = v(\{2, 3\}) = \alpha$, $v(\{1\}) = v(\{2\}) = v(\{3\}) = 0$*

*The core of the game is $\{(x_1, x_2, x_3): x_1 + x_2 \ge \alpha, x_1 + x_3 \ge \alpha, x_2 + x_3 \ge \alpha\}$*

*If $\alpha \gt \frac{2}{3}$, the core is empty. If $\alpha = \frac{2}{3}$, the core is $\{ (\frac{1}{3}, \frac{1}{3}, \frac{1}{3}) \}$. Otherwise the core consists of infinite points.*

