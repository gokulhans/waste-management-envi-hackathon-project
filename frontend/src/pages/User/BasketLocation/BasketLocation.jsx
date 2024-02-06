import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Link } from "react-router-dom"


const BasketLocation = () => {
    return (
        <div className="flex w-full flex-col h-screen">
          
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex items-center">
                <div className="w-full">

              <h1 className="font-semibold text-lg md:text-2xl">Baskets</h1>
                </div>
              
              <Select className="ml-4">
                <SelectTrigger>
                  <SelectValue placeholder="Select a city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="city1">City 1</SelectItem>
                  <SelectItem value="city2">City 2</SelectItem>
                  <SelectItem value="city3">City 3</SelectItem>
                </SelectContent>
              </Select>
              <DropdownMenu>
               
                <DropdownMenuContent align="end">
                  
                  <DropdownMenuItem>
                    <form>
                      <div className="grid gap-2">
                        <Label htmlFor="city">City</Label>
                        <Select className="w-full" id="city">
                          <SelectTrigger>
                            <SelectValue placeholder="Select a city" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="city1">City 1</SelectItem>
                            <SelectItem value="city2">City 2</SelectItem>
                            <SelectItem value="city3">City 3</SelectItem>
                          </SelectContent>
                        </Select>
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" placeholder="Enter location" />
                        <Label htmlFor="status">Status</Label>
                        <Select className="w-full" id="status">
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full">Full</SelectItem>
                            <SelectItem value="empty">Empty</SelectItem>
                          </SelectContent>
                        </Select>
                        <Label htmlFor="details">Details</Label>
                        <Input id="details" placeholder="Enter details" />
                      </div>
                    </form>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="border shadow-sm rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">City</TableHead>
                    <TableHead className="max-w-[150px]">Location</TableHead>
                    <TableHead className="hidden md:table-cell">Status</TableHead>
                    <TableHead>Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <img
                        alt="City image"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src="/placeholder.svg"
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium">City 1</TableCell>
                    <TableCell className="hidden md:table-cell">Full</TableCell>
                    <TableCell>Details 1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <img
                        alt="City image"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src="/placeholder.svg"
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium">City 2</TableCell>
                    <TableCell className="hidden md:table-cell">Empty</TableCell>
                    <TableCell>Details 2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <img
                        alt="City image"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src="/placeholder.svg"
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium">City 3</TableCell>
                    <TableCell className="hidden md:table-cell">Full</TableCell>
                    <TableCell>Details 3</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </main>
        </div>
      )
    }
    export default BasketLocation
    
    function Package2Icon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
          <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
          <path d="M12 3v6" />
        </svg>
      )
    }

    
    
    function PlusIcon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      )
    }
    
    
    function SearchIcon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      )
    }
    