import { ArrowRight, Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";

export function OrderTableRow() {
	return (
		<TableRow>
			<TableCell>
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline" size="xs">
							<Search className="h-3 w-3" />
							<span className="sr-only">Detalhes do pedido</span>
						</Button>
					</DialogTrigger>
				</Dialog>
			</TableCell>
			<TableCell className="font-mono text-xs font-medium">
				12l3k12ç3l
			</TableCell>
			<TableCell className="text-muted-foreground">há 15 minutos</TableCell>
			<TableCell>
				<div className="flex items-center gap-2">
					<span className="h-2 w-2 rounded-full bg-slate-400"></span>
					<span>Pendente</span>
				</div>
			</TableCell>
			<TableCell className="font-medium">John Doe</TableCell>
			<TableCell className="font-medium">R$ 149,90</TableCell>
			<TableCell>
				<Button variant="outline" size="xs">
					<ArrowRight className="w-3 h-3" />
					Aprovar
				</Button>
			</TableCell>
			<TableCell>
				<Button variant="ghost" size="xs">
					<X className="w-3 h-3" />
					Cancelar
				</Button>
			</TableCell>
		</TableRow>
	);
}
